Chart.defaults.font.family = 'Poppins, sans-serif';
Chart.defaults.font.size = 14;
Chart.defaults.color = '#ffffff'; // Define a cor branca para os textos

// Configuração global para animação
Chart.defaults.plugins.legend.labels.color = '#ffffff';
Chart.defaults.scale.grid.color = 'rgba(194, 190, 191, 0.4)'; // Cor da grade
Chart.defaults.scale.ticks.color = '#ffffff'; // Cor das labels dos eixos

// Dados para Radar Chart
const radarData = {
  labels: ['Ansiedade', 'Tensão Corporal', 'Cansaço Mental', 'Relacionamento com Colegas', 'Burnout'],
  datasets: [
    {
      label: 'Administrativo',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(94, 99, 255, 0.4)',
      borderColor: '#5e63ff',
      borderWidth: 2,
    },
    {
      label: 'Operacional',
      data: [28, 48, 40, 19, 96],
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: '#ff6384',
      borderWidth: 2,
    },
  ],
};

// Configuração do Radar Chart
new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: radarData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
    },
    plugins: {
      title: {
        display: true,
        text: 'Análise Geral de Indicadores',
        color: '#ffffff',
        font: { size: 16 },
      },
    },
  },
});

// Dados para Polar Area Chart
const polarData = {
  labels: ['Segurança Psicológica', 'Controle Financeiro', 'Disposição para Ajudar', 'Inclusão e Diversidade'],
  datasets: [
    {
      data: [12, 19, 15, 10],
      backgroundColor: ['#5e63ff', '#ff6384', '#4bc0c0', '#ffcd56'],
      borderColor: '#11121a',
      borderWidth: 2,
    },
  ],
};

// Configuração do Polar Area Chart
new Chart(document.getElementById('polarChart'), {
  type: 'polarArea',
  data: polarData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2500,
      easing: 'easeInOutQuart',
    },
    plugins: {
      title: {
        display: true,
        text: 'Indicadores de Bem-Estar e Inclusão',
        color: '#ffffff',
        font: { size: 16 },
      },
    },
  },
});

// Dados para Line Chart
const lineData = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Administrativo',
      data: [65, 75, 70, 80],
      fill: false,
      borderColor: '#5e63ff',
      backgroundColor: '#5e63ff',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Operacional',
      data: [45, 50, 55, 60],
      fill: false,
      borderColor: '#ff6384',
      backgroundColor: '#ff6384',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

// Configuração do Line Chart
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: lineData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutElastic',
    },
    plugins: {
      title: {
        display: true,
        text: 'Evolução Semanal por Departamento',
        color: '#ffffff',
        font: { size: 16 },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: '#42434a' },
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#42434a' },
      },
    },
  },
});