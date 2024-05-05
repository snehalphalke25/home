const express = require('express'); 
const path = require('path'); 
const app = express(); 
const port = process.env.PORT || 3000; 
// Serve static files from the Angular app 
app.use(express.static(path.join(__dirname, 'angular-webpage xxxxx'))); 
// Define routes 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, './src/app/home/home.component.html')); 
}); 
app.get('/about', (req, res) => { 
res.sendFile(path.join(__dirname, './src/app/contact/contact.component.html')); 
}); 
app.get('/contact', (req, res) => { 
res.sendFile(path.join(__dirname, './src/app/about/about.component.html')); 
});
// Start the server 
app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`); 
    });
snehal):
