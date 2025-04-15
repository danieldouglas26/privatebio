// Define o ano atual no rodapé assim que o script é lido
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Garante que o DOM está carregado antes de iniciar tsParticles
// O código de carregamento do JSON (que fizemos antes) também iria aqui dentro ou
// poderia ser chamado daqui, se você estivesse usando ele.
window.addEventListener('DOMContentLoaded', (event) => {

    // Verifica se a biblioteca tsParticles está carregada antes de usá-la
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            // --- SUA CONFIGURAÇÃO ORIGINAL tsParticles ---
            background: { color: { value: "#000000" } },
            fullScreen: { enable: true, zIndex: 0 },
            particles: {
                number: { value: 80, density: { enable: true, area: 730 } },
                color: { value: ["#00ffff", "#ff00ff", "#ffff00"] },
                shape: { type: "circle" },
                opacity: { value: { min: 0.1, max: 0.6 }, animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false } },
                size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, minimumValue: 1, sync: false } },
                links: {
                    enable: true, distance: 120, color: "random",
                    opacity: 0.4, width: 1,
                    triangles: { enable: true, color: "#0f0f0f", opacity: 0.05 }, // Ajuste a cor/opacidade do triângulo se necessário
                    warp: true, consent: false
                },
                move: {
                    enable: true, speed: 0.8, direction: "none", random: true, straight: false,
                    outModes: { default: "bounce" }, // 'bounce' é mais interessante que 'out'
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: { enable: true, mode: "grab" }, // 'grab' ou 'connect' são boas opções
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 150, links: { opacity: 1 } },
                    connect: { distance: 100, links: { opacity: 0.8 }, radius: 150 },
                    push: { quantity: 4 },
                    // Outros modos como bubble, repulse, remove podem ser explorados
                }
            },
            detectRetina: true
            // --- FIM DA SUA CONFIGURAÇÃO ---
        }).catch(error => {
             // Adiciona um tratamento de erro básico caso o tsParticles falhe ao carregar
             console.error("Falha ao carregar tsParticles:", error);
         });
    } else {
        console.error("Biblioteca tsParticles não encontrada. Verifique a importação no HTML.");
    }
});