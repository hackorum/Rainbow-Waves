class Circle {
    constructor() {
        this.radius = 60;
        this.al = 255;
        this.reverse = false;
    }

    renderCircles() {

        stroke(255, 0, 0, this.al);
        ellipse(width / 2, height / 2, this.radius, this.radius);

        stroke(255, 127, 0, this.al);
        ellipse(width / 2, height / 2, this.radius - 20, this.radius - 20);

        stroke(255, 255, 0, this.al);
        ellipse(width / 2, height / 2, this.radius - 40, this.radius - 40);

        stroke(0, 255, 0, this.al);
        ellipse(width / 2, height / 2, this.radius - 60, this.radius - 60);

        stroke(0, 0, 255, this.al);
        ellipse(width / 2, height / 2, this.radius - 80, this.radius - 80);

        stroke(75, 0, 130, this.al);
        ellipse(width / 2, height / 2, this.radius - 100, this.radius - 100);

        stroke(148, 0, 211, this.al);
        ellipse(width / 2, height / 2, this.radius - 120, this.radius - 120);

    }

    update() {
        if (this.radius < width / 2 && !this.reverse && this.al > 10) {
            this.radius += 1;
            this.al -= 0.5;
        } else {
            this.reverse = true;
            this.radius -= 1;
            this.al += 0.5;
        }

        if (this.radius < 30) {
            this.reverse = false;
        }
    }
}