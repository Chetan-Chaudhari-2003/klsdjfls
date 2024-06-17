
document.querySelector('#main #page5 #part1 #div1').addEventListener('mouseover', function() {
    document.querySelector('#main #page5 #part1 #div2 #inb').classList.add('move');
    document.querySelector('#main #page5 #part1 #div3 #inb').classList.add('move1');
    document.querySelector('#main #page5 #part1 #div4').classList.add('move2');
  });
  
  document.querySelector('#main #page5 #part1 #div1').addEventListener('mouseout', function() {
    document.querySelector('#main #page5 #part1 #div2 #inb').classList.remove('move');
    document.querySelector('#main #page5 #part1 #div3 #inb').classList.remove('move1');
    document.querySelector('#main #page5 #part1 #div4').classList.remove('move2');
  });
  document.querySelector('#main #page5 #part1 #div2').addEventListener('mouseover', function() {
    document.querySelector('#main #page5 #part1 #div3 #inb').classList.add('move3');
    document.querySelector('#main #page5 #part1 #div4').classList.add('move4');
  });
  
  document.querySelector('#main #page5 #part1 #div2').addEventListener('mouseout', function() {
    document.querySelector('#main #page5 #part1 #div3 #inb').classList.remove('move3');
    document.querySelector('#main #page5 #part1 #div4').classList.remove('move4');
  });
  document.querySelector('#main #page5 #part1 #div3').addEventListener('mouseover', function() {
    document.querySelector('#main #page5 #part1 #div4').classList.add('move5');
  });
  
  document.querySelector('#main #page5 #part1 #div3').addEventListener('mouseout', function() {
    document.querySelector('#main #page5 #part1 #div4').classList.remove('move5');
  });