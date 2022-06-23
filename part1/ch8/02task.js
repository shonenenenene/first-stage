
function ChooseWeapon( type ) {
    this.sword = type
  }
  
  let sword = new ChooseWeapon('two-handed')
  let sword2 = new sword.constructor('dagger')
  
console.log( sword2.sword )
  
