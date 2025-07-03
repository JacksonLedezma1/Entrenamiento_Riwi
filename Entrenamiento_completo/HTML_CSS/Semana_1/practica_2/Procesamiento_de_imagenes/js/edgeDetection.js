const imageInput = document.getElementById('imageInput');
const canvasContainer = document.querySelector('.canvas-container');

// Crear canvas para cada tipo de detección
const canvasTypes = ['original', 'sobel', 'laplacian', 'canny', 'hog'];
const canvases = {};
const contexts = {};

// Inicializar canvas
canvasTypes.forEach(type => {
    canvases[type] = document.getElementById(`${type}Canvas`);
    contexts[type] = canvases[type].getContext('2d');
});

// Función para convertir a escala de grises
function rgbaToGrayscale(imageData) {
    const data = imageData.data;
    const grayData = new Uint8ClampedArray(data.length);
    
    for (let i = 0; i < data.length; i += 4) {
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        grayData[i] = gray;
        grayData[i + 1] = gray;
        grayData[i + 2] = gray;
        grayData[i + 3] = 255;
    }
    
    return new ImageData(grayData, imageData.width, imageData.height);
}

// Función para aplicar desenfoque gaussiano
function gaussianBlur(imageData) {
    const kernel = [
        [1/16, 2/16, 1/16],
        [2/16, 4/16, 2/16],
        [1/16, 2/16, 1/16]
    ];
    
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const blurredData = new Uint8ClampedArray(data.length);
    
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let sum = 0;
            
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const idx = ((y + ky) * width + (x + kx)) * 4;
                    sum += data[idx] * kernel[ky + 1][kx + 1];
                }
            }
            
            const idx = (y * width + x) * 4;
            blurredData[idx] = sum;
            blurredData[idx + 1] = sum;
            blurredData[idx + 2] = sum;
            blurredData[idx + 3] = 255;
        }
    }
    
    return new ImageData(blurredData, width, height);
}

// Función para detección de bordes Sobel
function sobelEdgeDetection(imageData) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;
    const edgeData = new Uint8ClampedArray(data.length);
    
    // Kernels Sobel
    const kernelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
    const kernelY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
    
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let gx = 0;
            let gy = 0;
            
            // Aplicar kernels
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const idx = ((y + ky) * width + (x + kx)) * 4;
                    gx += data[idx] * kernelX[ky + 1][kx + 1];
                    gy += data[idx] * kernelY[ky + 1][kx + 1];
                }
            }
            
            // Magnitud del gradiente
            const magnitude = Math.sqrt(gx * gx + gy * gy);
            const idx = (y * width + x) * 4;
            
            // Normalizar y asignar
            const value = Math.min(255, magnitude);
            edgeData[idx] = value;
            edgeData[idx + 1] = value;
            edgeData[idx + 2] = value;
            edgeData[idx + 3] = 255;
        }
    }
    
    return new ImageData(edgeData, width, height);
}

// Función para detección Laplaciana
function laplacianEdgeDetection(imageData) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;
    const edgeData = new Uint8ClampedArray(data.length);
    
    // Kernel Laplaciano
    const kernel = [[0, 1, 0], [1, -4, 1], [0, 1, 0]];
    
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let sum = 0;
            
            for (let ky = -1; ky <= 1; ky++) {
                for (let kx = -1; kx <= 1; kx++) {
                    const idx = ((y + ky) * width + (x + kx)) * 4;
                    sum += data[idx] * kernel[ky + 1][kx + 1];
                }
            }
            
            const idx = (y * width + x) * 4;
            const value = Math.min(255, Math.abs(sum));
            edgeData[idx] = value;
            edgeData[idx + 1] = value;
            edgeData[idx + 2] = value;
            edgeData[idx + 3] = 255;
        }
    }
    
    return new ImageData(edgeData, width, height);
}

// Función para detección Canny (simplificada)
function cannyEdgeDetection(imageData) {
    const sobelResult = sobelEdgeDetection(imageData);
    const data = sobelResult.data;
    const width = sobelResult.width;
    const height = sobelResult.height;
    const edgeData = new Uint8ClampedArray(data.length);
    
    // Umbralización
    const highThreshold = 100;
    const lowThreshold = 50;
    
    for (let i = 0; i < data.length; i += 4) {
        const magnitude = data[i];
        const value = magnitude > highThreshold ? 255 : 
                     magnitude > lowThreshold ? 128 : 0;
        
        edgeData[i] = value;
        edgeData[i + 1] = value;
        edgeData[i + 2] = value;
        edgeData[i + 3] = 255;
    }
    
    return new ImageData(edgeData, width, height);
}

// Función para calcular HOG
function calculateHOG(imageData) {
    const width = imageData.width;
    const height = imageData.height;
    const cellSize = 8;
    const data = imageData.data;
    const hogData = new Uint8ClampedArray(data.length);
    
    // Calcular gradientes
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            const idx = (y * width + x) * 4;
            
            // Gradientes usando diferencias centrales
            const gx = data[idx + 4] - data[idx - 4];
            const gy = data[idx + width * 4] - data[idx - width * 4];
            
            // Magnitud y dirección
            const magnitude = Math.sqrt(gx * gx + gy * gy);
            const angle = Math.atan2(gy, gx) * 180 / Math.PI;
            
            // Visualización simple del HOG
            const value = Math.min(255, magnitude);
            hogData[idx] = value;
            hogData[idx + 1] = value;
            hogData[idx + 2] = value;
            hogData[idx + 3] = 255;
        }
    }
    
    return new ImageData(hogData, width, height);
}

// Función principal de procesamiento
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // Mostrar contenedor
            canvasContainer.classList.add('visible');
            
            // Configurar dimensiones
            canvasTypes.forEach(type => {
                canvases[type].width = img.width;
                canvases[type].height = img.height;
            });
            
            // Dibujar imagen original
            contexts.original.drawImage(img, 0, 0);
            
            // Obtener datos de imagen
            const imageData = contexts.original.getImageData(0, 0, img.width, img.height);
            
            // Convertir a escala de grises y aplicar desenfoque
            const grayImage = rgbaToGrayscale(imageData);
            const blurredImage = gaussianBlur(grayImage);
            
            // Aplicar diferentes métodos de detección
            const sobelEdges = sobelEdgeDetection(blurredImage);
            const laplacianEdges = laplacianEdgeDetection(blurredImage);
            const cannyEdges = cannyEdgeDetection(blurredImage);
            const hogResult = calculateHOG(blurredImage);
            
            // Mostrar resultados
            contexts.sobel.putImageData(sobelEdges, 0, 0);
            contexts.laplacian.putImageData(laplacianEdges, 0, 0);
            contexts.canny.putImageData(cannyEdges, 0, 0);
            contexts.hog.putImageData(hogResult, 0, 0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}); 