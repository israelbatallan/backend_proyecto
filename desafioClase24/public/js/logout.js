
const fetchNombreforDestroy = () => {
    fetch("/getNombre")
        .then((response) => response.json())
        .then(
            (data) =>
                (document.getElementById(
                    "userName"
                ).innerHTML = `<span class="text-primary fw-semibold fs-3">${data}</span>`)
        )
        .catch((err) => console.log(err));

        setTimeout(() => {
            window.location.href = "/crl";
            }, 2000);
};

fetchNombreforDestroy();