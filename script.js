<p id="success-message">
  Message Sent Successfully ✅
</p>

<script>

const form = document.querySelector(".contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {

        successMessage.style.display = "block";

        form.reset();

    } else {

        alert("Something went wrong ❌");

    }

});

</script>