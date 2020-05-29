const { v4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficulty) {
        this.id = v4();
        this.name = name || "No Name";
        this.description = description;
        this.imageUrl = imageUrl || "placeholder";
        this.difficulty = difficulty || 0;
    }

    save() {
        const data = {
            id = v4(),
            name = name || "No Name",
            description = description,
            imageUrl = imageUrl || "placeholder",
            difficulty = difficulty || 0,
        }

        fs.writeFile('../config/database.json', JSON.stringify(data), (error) => {
            if (error) {
                throw error;
            }

            console.log("New code is successfully stored!");

        });
    }
}

module.exports = Cube;