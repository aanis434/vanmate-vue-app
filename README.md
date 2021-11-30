Installation Process Step by Step
    - Initialize package.json :  npm init -y
    - Install Tailwind css : npm install tailwindcss@latest autoprexer@latest
    - Tailwind config file genereate: npx tailwindcss init
    - Make styles.css file and import tailwind moudels : src/styels.css
    - Config Package.json file for css build : 
            "scripts": {
                "build:css": "tailwind build src/style.css -o dist/style.css"
            } 
    - Settings Fonts - import google font on style.css and customise tailwindcss.config
        - @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
            theme: {
            extend: {
            fontFamily: {
                    poppins: "'Poppins', sans-serif",
                    inter: "'Inter', sans-serif"
                }
                },
            },