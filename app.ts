//tarea8
function largestNameOfArray(arr: string[]): string {
    let nombreMasLargo: string = arr[0];
  
    // Utilizamos un ciclo for para recorrer los elementos del arreglo
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > nombreMasLargo.length) {
        nombreMasLargo = arr[i];
      }
    }
  
    return nombreMasLargo;
  }
  
  // Ejemplo de uso:
  let heroes: string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
  let hero: string = largestNameOfArray(heroes);
  console.log(hero);
  