const toggle = document.getElementById('cus_toggle_btn');
const sidebar = document.getElementById('side_bar');
toggle.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.classList.toggle('show');
});
// Chart code from bootstrap
var chart = bb.generate({
  data: {
    columns: [
      ['Attended', 6],
      ['Pass', 4],
      ['Fail', 1],
    ],
    type: 'donut',
    onclick: function (d, i) {
      console.log('onclick', d, i);
    },
    onover: function (d, i) {
      console.log('onover', d, i);
    },
    onout: function (d, i) {
      console.log('onout', d, i);
    },
  },
  donut: {
    title: '70',
  },
  bindto: '#donut-chart',
});
