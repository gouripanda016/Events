document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: "Opening Ceremony",
            time: "10:00 AM - 11:00 AM",
            description: "Join us for the grand opening of the festival with speeches, music, and a ribbon-cutting ceremony."
        },
        {
            title: "Music Concert",
            time: "12:00 PM - 2:00 PM",
            description: "Enjoy live music performances from local bands and artists."
        },
        {
            title: "Food Tasting",
            time: "2:30 PM - 4:00 PM",
            description: "Sample delicious dishes from various food vendors and chefs."
        },
        {
            title: "Art Exhibition",
            time: "4:30 PM - 6:00 PM",
            description: "Explore an exhibition showcasing artworks from local artists."
        },
        {
            title: "Closing Ceremony",
            time: "7:00 PM - 8:00 PM",
            description: "Wrap up the festival with a closing speech, thank you notes, and a fireworks display."
        }
    ];

    const eventList = document.getElementById('event-list');

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');

        const titleElement = document.createElement('h2');
        titleElement.textContent = event.title;
        eventElement.appendChild(titleElement);

        const timeElement = document.createElement('p');
        timeElement.textContent = `Time: ${event.time}`;
        eventElement.appendChild(timeElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = event.description;
        eventElement.appendChild(descriptionElement);

        eventList.appendChild(eventElement);
    });
});
        