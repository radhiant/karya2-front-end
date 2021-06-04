$(document).ready(function () {

    var bar1 = new ProgressBar.Circle(progress1, {
        color: '#FF5733',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#FF5733', width: 10 },
        to: { color: '#FF5733', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar2 = new ProgressBar.Circle(progress2, {
        color: '#6495ED',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#6495ED', width: 10 },
        to: { color: '#6495ED', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar3 = new ProgressBar.Circle(progress3, {
        color: '#f0db4f',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#f0db4f', width: 10 },
        to: { color: '#f0db4f', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar4 = new ProgressBar.Circle(progress4, {
        color: '#0769ad',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#0769ad', width: 10 },
        to: { color: '#0769ad', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar5 = new ProgressBar.Circle(progress5, {
        color: '#8993be',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#8993be', width: 10 },
        to: { color: '#8993be', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar6 = new ProgressBar.Circle(progress6, {
        color: '#00758F',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#00758F', width: 10 },
        to: { color: '#00758F', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar7 = new ProgressBar.Circle(progress7, {
        color: '#563d7c',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#563d7c', width: 10 },
        to: { color: '#563d7c', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar8 = new ProgressBar.Circle(progress8, {
        color: '#dd4814',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#dd4814', width: 10 },
        to: { color: '#dd4814', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });

    var bar9 = new ProgressBar.Circle(progress9, {
        color: '#61DBFB',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#61DBFB', width: 10 },
        to: { color: '#61DBFB', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + "%");
            }

        }
    });


    bar1.text.style.fontFamily = '"Open Sans", sans-serif';
    bar1.text.style.fontSize = '2rem';
    bar1.animate(0.9);  // Number from 0.0 to 1.0

    bar2.text.style.fontFamily = '"Open Sans", sans-serif';
    bar2.text.style.fontSize = '2rem';
    bar2.animate(0.9);  // Number from 0.0 to 1.0

    bar3.text.style.fontFamily = '"Open Sans", sans-serif';
    bar3.text.style.fontSize = '2rem';
    bar3.animate(0.85);  // Number from 0.0 to 1.0

    bar4.text.style.fontFamily = '"Open Sans", sans-serif';
    bar4.text.style.fontSize = '2rem';
    bar4.animate(0.80);  // Number from 0.0 to 1.0

    bar5.text.style.fontFamily = '"Open Sans", sans-serif';
    bar5.text.style.fontSize = '2rem';
    bar5.animate(0.85);  // Number from 0.0 to 1.0

    bar6.text.style.fontFamily = '"Open Sans", sans-serif';
    bar6.text.style.fontSize = '2rem';
    bar6.animate(0.8);  // Number from 0.0 to 1.0

    bar7.text.style.fontFamily = '"Open Sans", sans-serif';
    bar7.text.style.fontSize = '2rem';
    bar7.animate(0.9);  // Number from 0.0 to 1.0

    bar8.text.style.fontFamily = '"Open Sans", sans-serif';
    bar8.text.style.fontSize = '2rem';
    bar8.animate(0.9);  // Number from 0.0 to 1.0

    bar9.text.style.fontFamily = '"Open Sans", sans-serif';
    bar9.text.style.fontSize = '2rem';
    bar9.animate(0.85);  // Number from 0.0 to 1.0

});
