const left = document.getElementById('left');

left.addEventListener('click', function (ev) {
   if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'DEV') {
      ev.target.classList.add('bold');
      console.log(developer);

      document.querySelector('#table #tr1').innerHTML = '';
      document.querySelector('#table #tr2').innerHTML = '';
      let newTable111 = document.createElement('td');
      let newTable112 = document.createElement('td');
      let newTable113 = document.createElement('td');
      let newTable114 = document.createElement('td');
      newTable111.innerHTML = (developer.dept_units[0].id);
      newTable112.innerHTML = (developer.dept_units[0].name);
      newTable113.innerHTML = (developer.dept_units[0].tel);
      newTable114.innerHTML = (developer.dept_units[0].salary);
      tr1.append(newTable111, newTable112, newTable113, newTable114);

      let newTable21 = document.createElement('td');
      let newTable22 = document.createElement('td');
      let newTable23 = document.createElement('td');
      let newTable24 = document.createElement('td');
      newTable21.innerHTML = (developer.dept_units[1].id);
      newTable22.innerHTML = (developer.dept_units[1].name);
      newTable23.innerHTML = (developer.dept_units[1].tel);
      newTable24.innerHTML = (developer.dept_units[1].salary);
      tr2.append(newTable21, newTable22, newTable23, newTable24); 
   }
   
   if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'LEADDEV') {
      ev.target.classList.add('bold');
      console.log(devLead);

      document.querySelector('#table #tr1').innerHTML = '';
      document.querySelector('#table #tr2').innerHTML = '';
      let newTable11 = document.createElement('td');
      let newTable12 = document.createElement('td');
      let newTable13 = document.createElement('td');
      let newTable14 = document.createElement('td');
      newTable11.innerHTML = (devLead.dept_units[0].id);
      newTable12.innerHTML = (devLead.dept_units[0].name);
      newTable13.innerHTML = (devLead.dept_units[0].tel);
      newTable14.innerHTML = (devLead.dept_units[0].salary);
      tr1.append(newTable11, newTable12, newTable13, newTable14);


      let newTable21 = document.createElement('td');
      let newTable22 = document.createElement('td');
      let newTable23 = document.createElement('td');
      let newTable24 = document.createElement('td');
      newTable21.innerHTML = (devLead.dept_units[1].id);
      newTable22.innerHTML = (devLead.dept_units[1].name);
      newTable23.innerHTML = (devLead.dept_units[1].tel);
      newTable24.innerHTML = (devLead.dept_units[1].salary);
      tr2.append(newTable21, newTable22, newTable23, newTable24);
   }

   if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'DEVMAN') {
      ev.target.classList.add('bold');
      console.log(devDeptHead);

      document.querySelector('#table #tr1').innerHTML = '';
      document.querySelector('#table #tr2').innerHTML = '';
      let newTable11 = document.createElement('td');
      let newTable12 = document.createElement('td');
      let newTable13 = document.createElement('td');
      let newTable14 = document.createElement('td');
      newTable11.innerHTML = (devDeptHead.dept_units[0].id);
      newTable12.innerHTML = (devDeptHead.dept_units[0].name);
      newTable13.innerHTML = (devDeptHead.dept_units[0].tel);
      newTable14.innerHTML = (devDeptHead.dept_units[0].salary);
      tr1.append(newTable11, newTable12, newTable13, newTable14);
   }
});


left.addEventListener('click', function (ev) {
   if (ev.target.dataset.sign === 'DEV') {
      leaddev.classList.remove('bold');
      devman.classList.remove('bold');
   }
   if (ev.target.dataset.sign === 'LEADDEV') {
      dev.classList.remove('bold');
      devman.classList.remove('bold');
   }
   if (ev.target.dataset.sign === 'DEVMAN') {
      dev.classList.remove('bold');
      leaddev.classList.remove('bold');
   }
});


const Dev = document.getElementById('dev');
const LeadDev = document.getElementById('leaddev');

left.addEventListener('click', function (ev) {
   if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'LEADDEV') {
      ev.target.classList.toggle('chevron-right');
      ev.target.classList.toggle('chevron-bottom');
      Dev.classList.toggle('displayInline');
      Dev.classList.toggle('displayNone');
   }
   if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'DEVMAN') {
      ev.target.classList.toggle('chevron-right');
      ev.target.classList.toggle('chevron-bottom');
      LeadDev.classList.toggle('displayInline');
      LeadDev.classList.toggle('displayNone');
   }



});















const employeers = [
   {
       id: 0,
       name: "YarikHead",
       dept_unit_id: 0,
       tel: "123-123-3", 
       salary: 3000
   },
   {
       id: 1,
       name: "MashaLead",
       dept_unit_id: 1,
       tel: "123-123-3", 
       salary: 2000
   },
   {
       id: 2,
       name: "SashaLead",
       dept_unit_id: 1,
       tel: "123-123-3", 
       salary: 2200
   },
   {
       id: 3,
       name: "MirraDev",
       dept_unit_id: 2,
       tel: "123-123-3",
       salary: 1200
   },
   {
       id: 4,
       name: "IraDev",
       dept_unit_id: 2,
       tel: "123-123-3",
       salary: 1000
   },
   {
       id: 5,
       name: "DanikHead3",
       dept_unit_id: 3,
       tel: "123-123-33",
       salary: 3000
   },
   {
       id: 7,
       name: "KoliaLead",
       dept_unit_id: 4,
       tel: "123-123-3",
       salary: 2000
   },
   {
       id: 6,
       name: "OliaLead3",
       dept_unit_id: 4,
       tel: "123-123-3",
       salary: 2200
   },
   {
       id: 9,
       name: "SienaTest",
       dept_unit_id: 5,
       tel: "123-123-3",
       salary: 1000
   },
{
       id: 8,
       name: "LenaTest",
       dept_unit_id: 5,
       tel: "123-123-3",
       salary: 1200
   }
];

let developer = {
   name: 'Developers',
   id: 2,
   dept_units: [],
};
let devLead = {
   name: 'Lead Developers',
   id: 1,
   dept_units: []
};
let devDeptHead = {
   name: 'Development Management',
   id: 0,
   dept_units: [],
};

developer.dept_units = employeers.filter(developer => developer.dept_unit_id === 2);
devLead.dept_units = employeers.filter(devLead => devLead.dept_unit_id === 1);
devDeptHead.dept_units = employeers.filter(devDeptHead => devDeptHead.dept_unit_id === 0);
// console.log(developer);
// console.log(devLead);
// console.log(devDeptHead);


