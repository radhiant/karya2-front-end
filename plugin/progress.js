$(document).ready(function () {

    var bar1 = new ProgressBar.Circle(progress1, {
        color: '#a537e4',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#a537e4', width: 10 },
        to: { color: '#a537e4', width: 10 },
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
        color: '#ff9295',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#ff9295', width: 10 },
        to: { color: '#ff9295', width: 10 },
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
        color: '#2d9cdb',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#2d9cdb', width: 10 },
        to: { color: '#2d9cdb', width: 10 },
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
        color: '#ffbb6d',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#ffbb6d', width: 10 },
        to: { color: '#ffbb6d', width: 10 },
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
    bar1.text.style.fontSize = '2.5rem';
    bar1.animate(0.85);  // Number from 0.0 to 1.0

    bar2.text.style.fontFamily = '"Open Sans", sans-serif';
    bar2.text.style.fontSize = '2.5rem';
    bar2.animate(0.9);  // Number from 0.0 to 1.0

    bar3.text.style.fontFamily = '"Open Sans", sans-serif';
    bar3.text.style.fontSize = '2.5rem';
    bar3.animate(0.8);  // Number from 0.0 to 1.0

    bar4.text.style.fontFamily = '"Open Sans", sans-serif';
    bar4.text.style.fontSize = '2.5rem';
    bar4.animate(0.9);  // Number from 0.0 to 1.0

});
