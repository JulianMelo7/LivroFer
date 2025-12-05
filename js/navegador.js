document.addEventListener("DOMContentLoaded", function () {

            const sections = document.querySelectorAll(".slide");
            const menuLinks = document.querySelectorAll("nav a");

            function updateActiveLink() {
                let index = sections.length;

                // Detecta qual section está mais visível
                while (--index && window.scrollY + window.innerHeight/2 < sections[index].offsetTop) {}

                // Remove classe ativa de todos
                menuLinks.forEach(link => link.classList.remove("ativo"));

                // Adiciona no link certo
                const id = sections[index].id;
                const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("ativo");
            }

            updateActiveLink();
            window.addEventListener("scroll", updateActiveLink);
        });