document.getElementById("bot-vol").addEventListener("click", function() {
    document.getElementById("control-tab").style.display = "none";
    document.getElementById("volunteers-tab").style.display = "block";
    document.getElementById("pessoas-tab").style.display = "none"; // Garante que outras abas estejam ocultas se necessário
});
 
document.getElementById("bot-ppa").addEventListener("click", function() {
    document.getElementById("control-tab").style.display = "none";
    document.getElementById("volunteers-tab").style.display = "none";
    document.getElementById("pessoas-tab").style.display = "block";
});

document.addEventListener('DOMContentLoaded', function () {
    const createEventTab = document.getElementById('create-event-tab');
    const viewEventsTab = document.getElementById('view-events-tab');
    const createEventForm = document.getElementById('create-event-form');
    const viewEvents = document.getElementById('view-events');

    createEventTab.addEventListener('click', function () {
        createEventTab.classList.add('active');
        viewEventsTab.classList.remove('active');
        createEventForm.classList.remove('hidden');
        viewEvents.classList.add('hidden');
    });

    viewEventsTab.addEventListener('click', function () {
        viewEventsTab.classList.add('active');
        createEventTab.classList.remove('active');
        viewEvents.classList.remove('hidden');
        createEventForm.classList.add('hidden');
    });
});