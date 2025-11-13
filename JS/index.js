document.addEventListener("DOMContentLoaded", function() {
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Element is IN view: Add .show
                        entry.target.classList.add('show');
                    } else {
                        // Element is OUT of view: Remove .show
                        entry.target.classList.remove('show');
                    }
                });
            }, {
                threshold: 0.1 // Trigger when 10% is visible
            });

            // Find all elements with the .hidden class and observe them
            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach((el) => observer.observe(el));
            
        });