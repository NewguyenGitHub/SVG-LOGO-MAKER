// Function to generate SVG file
function generateSVG(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${data.render()}

    <text 
        x="${data.shape != 'triangle' ? '125' : '150'}" 
        y="${data.shape != 'triangle' ? '120' : '150'}" 
        font-size="60" 
        text-anchor="middle" 
        fill="${data.textColor}">${data.text}
    </text>
  
  </svg>
    `;
};

module.exports = generateSVG;
