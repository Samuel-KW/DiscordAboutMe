class AboutMeCanvas {
    constructor(width=13, height=6) {

        this.width = width;
        this.height = height;

        this.colors = [
            '\u{2B1B}',
            '\u{1F7E5}',
            '\u{1F7EB}',
            '\u{1F7E7}',
            '\u{1F7E8}',
            '\u{1F7E9}',
            '\u{1F7E6}',
            '\u{1F7EA}',
            '\u{2B1C}',
        ];

        this.selectedColor = this.colors[0];

        this.mouseDown = false;

        this.setupListeners();
    }

    setupListeners () {
        window.addEventListener('mousedown', () => this.mouseDown = true);
        window.addEventListener('mouseup', () => this.mouseDown = false);

        window.addEventListener('mousemove', e => {
            
            if (e.target.hasAttribute('pixel') && this.mouseDown)
                e.target.textContent = this.selectedColor;

        });

        window.addEventListener('click', e => {
            
            if (e.target.hasAttribute('pixel'))
                e.target.textContent = this.selectedColor;

        });
    }


    createPallete (parent) {
        for (let i = 0; i < this.colors.length; ++i) {
            const color = this.colors[i];

            const elem = document.createElement('span');
            elem.textContent = color;
            elem.addEventListener('click', () => {
                this.selectedColor = elem.textContent;
            });
            
            parent.appendChild(elem);
        }
    }

    createCanvas (parent) {

        for (let r = 0; r < this.height; ++r) {
            
            const elemContainerRow = document.createElement('div');

            for (let c = 0; c < this.width; ++c) {
                
                const elemPixel = document.createElement('span');
                elemPixel.textContent = this.selectedColor;
                elemPixel.setAttribute('pixel', true);

                elemContainerRow.appendChild(elemPixel);
            }

            parent.appendChild(elemContainerRow);
        }
    }

    getOrientation() {
        return window.innerWidth > window.innerHeight ? 'h' : 'v';
    }
}

const canvas = new AboutMeCanvas();
canvas.createCanvas(document.getElementById('canvas'));
canvas.createPallete(document.getElementById('palette'));