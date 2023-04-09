const metros = prompt("Quantos metros voce quer converter?")
const m = parseFloat(metros)

const mm = m *1000
const cm = m *100
const dm = m *10
const dam = m / 10
const hm = m / 100
const km = m / 1000


const opcao = prompt("Qual tipo de conversão voce quer fazer ? "+
"\n1. Milimetros (mm)"+
"\n2. Centimetros (cm)"+
"\n3. Decimetro (dm)"+
"\n4. Decametro (dam)"+
"\n5. Hectometro (hm)"+
"\n6. Quilometro (km)")


switch (opcao){
    case "1":
        alert("O resultado da conversão foi: "+m+"m = "+mm+"mm")
    break
    case "2":
        alert("O resultado da conversão foi: "+m+"m = "+cm+"cm")
    break
    case "3":
        alert("O resultado da conversão foi: "+m+"m = "+dm+"dm")
    break
    case "4":
        alert("O resultado da conversão foi: "+m+" m = "+dam+"dam")
    break
    case "5":
        alert("O resultado da conversão foi: "+m+"m = "+hm+"hm")
    break
    case "6":
        alert("O resultado da conversão foi: "+m+"m = "+km+"km")
    break
    default:
        alert("Opção invalida")
}