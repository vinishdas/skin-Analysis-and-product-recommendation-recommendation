const axios = require('axios');
const path = require('path');

exports.analyzeImage = async (req, res) => {
    try {
        const imagePath = path.join(__dirname, '../', req.file.path);

        // Send image to the ML model API
        const response = await axios.post('http://localhost:8000/detect', {
            imagePath,
        });

        // Mock product recommendations (replace with real logic)
        const recommendations = [
            { product: 'Acne Treatment Gel', condition: 'acne' },
            { product: 'Vitamin C Serum', condition: 'hyperpigmentation' },
        ];

        res.status(200).json({
            detectedConditions: response.data.conditions,
            recommendations,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error analyzing image' });
    }
};
