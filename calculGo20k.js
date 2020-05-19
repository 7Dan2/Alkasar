/* Cette fonction renvoie la quantité restante de liquide dans une citerne
A partir d'une hauteur mesurée, on arrondi au cm supérieur;
De cette valeur arrondie on donne la quantité de liquide restant dans la citerne. */

function calculGo20k()
{
    let getFuelHeigtValue = document.getElementById("lectureFioul20k").value;
console.log("valeur lue jauge citerne 20k :" + " " + getFuelHeigtValue);

    let roundUpFuelHeightValue = Math.ceil(getFuelHeigtValue);
console.log("valeur lue arrondie à l'unité supérieure : " + " " + roundUpFuelHeightValue);

    let roundDownToIndex = Math.floor(roundUpFuelHeightValue -1);
console.log("Index à rechercher :" + " " + roundDownToIndex);

    const fuelQuantityPerCm = [8, 23, 42, 64, 89, 117, 148, 180, 216, 252, 291 ,332, 373, 418, 464, 511, 560, 609, 661, 714,
        764, 823, 880, 937, 997, 1056, 1118, 1181, 1243, 1308, 1373, 1440, 1508, 1577, 1645, 1716, 1786, 1859, 1931, 2005,
        2080, 2156, 2231, 2307, 2386, 2465, 2544, 2625, 2706, 2787, 2869, 2952, 3036, 3120, 3205, 3292, 3376, 3464, 3552, 3639,
        3727, 3817, 3907, 3997, 4087, 4178, 4270, 4363, 4455, 4549, 4642, 4736, 4831, 4927, 5021, 5118, 5214, 5311, 5409, 5506, 5604,
        5702, 5801, 5900, 6000, 6100, 6200, 6300, 6400, 6501, 6603, 6704, 6806, 6906, 7011, 7112, 7216, 7418, 7423, 7525, 7629, 7733,
        7838, 7941, 8046, 8151, 8255, 8359, 8465, 8570, 8675, 8780, 8887, 8992, 9097, 9204, 9309, 9414, 9520, 9627, 9732, 9838, 9945,
        10051, 10157, 10263, 10369, 10474, 10581, 10686, 10793, 10898, 11004, 11109, 11215, 11321, 11426, 11531, 11637, 11742, 11847,
        11952, 12056, 12161, 12264, 12369, 12474, 12578, 12681, 12784, 12887, 12990, 13093, 13196, 13298, 13399, 13502, 13603, 13704,
        13805, 13906, 14007, 14106, 14206, 14304, 14404, 14502, 14601, 14698, 14797, 14894, 14991, 15087, 15182, 15277, 15373, 15467,
        15561, 15655, 15749, 15841, 15933, 16026, 16116, 16208, 16298, 16387, 16476, 16565, 16652, 16739, 16826, 16912, 16997, 17082,
        17166, 17249, 17333, 17414, 17496, 17576, 17656, 17735, 17815, 17892, 17969, 18044, 18119, 18194, 18268, 18341, 18412, 18483, 
        18554, 18623, 18691, 18758, 18825, 18890, 18953, 19017, 19079, 19140, 19200, 19259, 19316, 19372, 19428, 19482, 19534, 19585,
        19636, 19683, 19730, 19775, 19819, 19861, 19901, 19940, 19976, 20011, 20044, 20073, 20101, 20125, 20148, 20166, 20179];
   
    let fuelRemainInTank = fuelQuantityPerCm[roundDownToIndex];
    
    // switch(roundDownToIndex)
    // {
    //     case 24:
    //     alert("Attention ! \n Moins de 1000 litres");
    //     break;
    //     case 62:
    //     alert("Attention 25% de la capacité atteinte");
    //     break;
    //     case 124:
    //     alert("Attention 50% de la capacité atteinte");
    //     break;
    //     default:
    //         fuelRemainInTank = "En attente de données";
    // };
    
    
// /*equivalence pour la cuve 20000litres*/
//     switch(roundUpFuelHeightValue)
//     {
//         case 1:
//         fuelRemainInTank = fuelQuantityPerCm[0];
//         break;
//         case 2:
//         fuelRemainInTank = fuelQuantityPerCm[1];
//         break;
//         case 3:
//         fuelRemainInTank = fuelQuantityPerCm[2];
//         break;
//         case 4:
//         fuelRemainInTank = fuelQuantityPerCm[3];
//         break; 
//         case 5:
//         fuelRemainInTank = fuelQuantityPerCm[4];
//         break; 
//         case 6:
//         fuelRemainInTank = fuelQuantityPerCm[5];
//         break; 
//         case 7:
//         fuelRemainInTank = fuelQuantityPerCm[6];
//         break;
//         case 8:
//         fuelRemainInTank = fuelQuantityPerCm[7];
//         break;
//         case 9:
//         fuelRemainInTank = fuelQuantityPerCm[8];
//         break;
//         case 10:
//         fuelRemainInTank = fuelQuantityPerCm[9];
//         break;
//         case 11:
//         fuelRemainInTank = fuelQuantityPerCm[10];
//         break;
//         case 12:
//         fuelRemainInTank = fuelQuantityPerCm[11];
//         break;
//         case 13:
//         fuelRemainInTank = fuelQuantityPerCm[12];
//         break;
//         case 14:
//         fuelRemainInTank = fuelQuantityPerCm[13];
//         break;
//         case 15:
//         fuelRemainInTank = fuelQuantityPerCm[14];
//         break;
//         case 16:
//         fuelRemainInTank = fuelQuantityPerCm[15];
//         break;
//         case 17:
//         fuelRemainInTank = fuelQuantityPerCm[14];
//         break;
//         case 18:
//         fuelRemainInTank = fuelQuantityPerCm[17];
//         break;
//         case 19:
//         fuelRemainInTank = fuelQuantityPerCm[18];
//         break;
//         case 20:
//         fuelRemainInTank = fuelQuantityPerCm[19];
//         break;
//         case 21:
//         fuelRemainInTank = fuelQuantityPerCm[20];
//         break;
//         case 22:
//         fuelRemainInTank = fuelQuantityPerCm[21];
//         break;
//         case 23:
//         fuelRemainInTank = fuelQuantityPerCm[22];
//         break;
//         case 24:
//         fuelRemainInTank = fuelQuantityPerCm[23];
//         break;
//         case 25:
//         fuelRemainInTank = fuelQuantityPerCm[24];
//         alert("Attention 10% de la capacité atteinte");
//         break;
//         case 26:
//         fuelRemainInTank = fuelQuantityPerCm[25];
//         break;
//         case 27:
//         fuelRemainInTank = fuelQuantityPerCm[26];
//         break;
//         case 28:
//         fuelRemainInTank = fuelQuantityPerCm[27];
//         break;
//         case 29:
//         fuelRemainInTank = fuelQuantityPerCm[28];
//         break;
//         case 30:
//         fuelRemainInTank = fuelQuantityPerCm[29];
//         break;
//         case 31:
//         fuelRemainInTank = fuelQuantityPerCm[30];
//         break;
//         case 32:
//         fuelRemainInTank = fuelQuantityPerCm[31];
//         break;
//         case 33:
//         fuelRemainInTank = fuelQuantityPerCm[32];
//         break;
//         case 34:
//         fuelRemainInTank = fuelQuantityPerCm[33];
//         break;
//         case 35:
//         fuelRemainInTank = fuelQuantityPerCm[34];
//         break;
//         case 36:
//         fuelRemainInTank = fuelQuantityPerCm[35];
//         break;
//         case 37:
//         fuelRemainInTank = fuelQuantityPerCm[36];
//         break;
//         case 38:
//         fuelRemainInTank = fuelQuantityPerCm[37];
//         break;
//         case 39:
//         fuelRemainInTank = fuelQuantityPerCm[38];
//         break;
//         case 40:
//         fuelRemainInTank = fuelQuantityPerCm[39];
//         break;
//         case 41:
//         fuelRemainInTank = fuelQuantityPerCm[40];
//         break;
//         case 42:
//         fuelRemainInTank = fuelQuantityPerCm[41];
//         break;
//         case 43:
//         fuelRemainInTank = fuelQuantityPerCm[42];
//         break;
//         case 44:
//         fuelRemainInTank = fuelQuantityPerCm[43];
//         break;
//         case 45:
//         fuelRemainInTank = fuelQuantityPerCm[44];
//         break;
//         case 46:
//         fuelRemainInTank = fuelQuantityPerCm[45];
//         break;
//         case 47:
//         fuelRemainInTank = fuelQuantityPerCm[46];
//         break;
//         case 48:
//         fuelRemainInTank = fuelQuantityPerCm[47];
//         break;
//         case 49:
//         fuelRemainInTank = fuelQuantityPerCm[48];
//         break;
//         case 50:
//         fuelRemainInTank = fuelQuantityPerCm[49];
//         break;
//         case 51:
//         fuelRemainInTank = fuelQuantityPerCm[50];
//         break;
//         case 52:
//         fuelRemainInTank = fuelQuantityPerCm[51];
//         break;
//         case 53:
//         fuelRemainInTank = fuelQuantityPerCm[52];
//         break;
//         case 54:
//         fuelRemainInTank = fuelQuantityPerCm[53];
//         break;
//         case 55:
//         fuelRemainInTank = fuelQuantityPerCm[54];
//         break;
//         case 56:
//         fuelRemainInTank = fuelQuantityPerCm[55];
//         break;
//         case 57:
//         fuelRemainInTank = fuelQuantityPerCm[56];
//         break;
//         case 58:
//         fuelRemainInTank = fuelQuantityPerCm[57];
//         break;
//         case 59:
//         fuelRemainInTank = fuelQuantityPerCm[58];
//         break;
//         case 60:
//         fuelRemainInTank = fuelQuantityPerCm[59];
//         break;
//         case 61:
//         fuelRemainInTank = fuelQuantityPerCm[60];
//         break;
//         case 62:
//         fuelRemainInTank = fuelQuantityPerCm[61];
//         break;
//         case 63:
//         fuelRemainInTank = fuelQuantityPerCm[62];
//         break;
//         case 64:
//         fuelRemainInTank = fuelQuantityPerCm[63];
//         break;
//         case 65:
//         fuelRemainInTank = fuelQuantityPerCm[64];
//         break;
//         case 66:
//         fuelRemainInTank = fuelQuantityPerCm[65];
//         break;
//         case 67:
//         fuelRemainInTank = fuelQuantityPerCm[66];
//         break;
//         case 68:
//         fuelRemainInTank = fuelQuantityPerCm[67];
//         break;
//         case 69:
//         fuelRemainInTank = fuelQuantityPerCm[68];
//         break;
//         case 70:
//         fuelRemainInTank = fuelQuantityPerCm[69];
//         break;
//         case 71:
//         fuelRemainInTank = fuelQuantityPerCm[70];
//         break;
//         case 72:
//         fuelRemainInTank = fuelQuantityPerCm[71];
//         break;
//         case 73:
//         fuelRemainInTank = fuelQuantityPerCm[72];
//         break;
//         case 74:
//         fuelRemainInTank = fuelQuantityPerCm[73];
//         break;
//         case 75:
//         fuelRemainInTank = fuelQuantityPerCm[74];
//         break;
//         case 76:
//         fuelRemainInTank = fuelQuantityPerCm[75];
//         break;
//         case 77:
//         fuelRemainInTank = fuelQuantityPerCm[76];
//         break;
//         case 78:
//         fuelRemainInTank = fuelQuantityPerCm[77];
//         break;
//         case 79:
//         fuelRemainInTank = fuelQuantityPerCm[78];
//         break;
//         case 80:
//         fuelRemainInTank = fuelQuantityPerCm[79];
//         break;
//         case 81:
//         fuelRemainInTank = fuelQuantityPerCm[80];
//         break;
//         case 82:
//         fuelRemainInTank = fuelQuantityPerCm[81];
//         break;
//         case 83:
//         fuelRemainInTank = fuelQuantityPerCm[82];
//         break;
//         case 84:
//         fuelRemainInTank = fuelQuantityPerCm[83];
//         break;
//         case 85:
//         fuelRemainInTank = fuelQuantityPerCm[84];
//         break;
//         case 86:
//         fuelRemainInTank = fuelQuantityPerCm[85];
//         break;
//         case 87:
//         fuelRemainInTank = fuelQuantityPerCm[86];
//         break;
//         case 88:
//         fuelRemainInTank = fuelQuantityPerCm[87];
//         break;
//         case 89:
//         fuelRemainInTank = fuelQuantityPerCm[88];
//         break;
//         case 90:
//         fuelRemainInTank = fuelQuantityPerCm[89];
//         break;
//         case 91:
//         fuelRemainInTank = fuelQuantityPerCm[89];
//         break;
//         case 92:
//         fuelRemainInTank = fuelQuantityPerCm[90];
//         break;
//         case 93:
//         fuelRemainInTank = fuelQuantityPerCm[92];
//         break;
//         case 94:
//         fuelRemainInTank = fuelQuantityPerCm[93];
//         break;
//         case 95:
//         fuelRemainInTank = fuelQuantityPerCm[94];
//         break;
//         case 96:
//         fuelRemainInTank = fuelQuantityPerCm[95];
//         break;
//         case 97:
//         fuelRemainInTank = fuelQuantityPerCm[96];
//         break;
//         case 98:
//         fuelRemainInTank = fuelQuantityPerCm[97];
//         break;
//         case 99:
//         fuelRemainInTank = fuelQuantityPerCm[98];
//         break;
//         case 100:
//         fuelRemainInTank = fuelQuantityPerCm[99];
//         break; 
//         case 101:
//         fuelRemainInTank = fuelQuantityPerCm[100];
//         break;
//         case 101:
//         fuelRemainInTank = fuelQuantityPerCm[100];
//         break;
//         case 102:
//         fuelRemainInTank = fuelQuantityPerCm[101];
//         break;
//         case 103:
//         fuelRemainInTank = fuelQuantityPerCm[102];
//         break;
//         case 104:
//         fuelRemainInTank = fuelQuantityPerCm[103];
//         break; 
//         case 105:
//         fuelRemainInTank = fuelQuantityPerCm[104];
//         break; 
//         case 106:
//         fuelRemainInTank = fuelQuantityPerCm[105];
//         break; 
//         case 107:
//         fuelRemainInTank = fuelQuantityPerCm[106];
//         break;
//         case 108:
//         fuelRemainInTank = fuelQuantityPerCm[107];
//         break;
//         case 109:
//         fuelRemainInTank = fuelQuantityPerCm[108];
//         break;
//         case 110:
//         fuelRemainInTank = fuelQuantityPerCm[109];
//         break;
//         case 111:
//         fuelRemainInTank = fuelQuantityPerCm[110];
//         break;
//         case 112:
//         fuelRemainInTank = fuelQuantityPerCm[111];
//         break;
//         case 113:
//         fuelRemainInTank = fuelQuantityPerCm[112];
//         break;
//         case 114:
//         fuelRemainInTank = fuelQuantityPerCm[113];
//         break;
//         case 115:
//         fuelRemainInTank = fuelQuantityPerCm[114];
//         break;
//         case 116:
//         fuelRemainInTank = fuelQuantityPerCm[115];
//         break;
//         case 117:
//         fuelRemainInTank = fuelQuantityPerCm[114];
//         break;
//         case 118:
//         fuelRemainInTank = fuelQuantityPerCm[117];
//         break;
//         case 119:
//         fuelRemainInTank = fuelQuantityPerCm[118];
//         break;
//         case 120:
//         fuelRemainInTank = fuelQuantityPerCm[119];
//         break;
//         case 121:
//         fuelRemainInTank = fuelQuantityPerCm[120];
//         break;
//         case 122:
//         fuelRemainInTank = fuelQuantityPerCm[121];
//         break;
//         case 123:
//         fuelRemainInTank = fuelQuantityPerCm[122];
//         break;
//         case 124:
//         fuelRemainInTank = fuelQuantityPerCm[123];
//         break;
//         case 125:
//         fuelRemainInTank = fuelQuantityPerCm[124];
//         alert("attention 50% de la capacité");
//         break;
//         case 126:
//         fuelRemainInTank = fuelQuantityPerCm[125];
//         break;
//         case 127:
//         fuelRemainInTank = fuelQuantityPerCm[126];
//         break;
//         case 128:
//         fuelRemainInTank = fuelQuantityPerCm[127];
//         break;
//         case 129:
//         fuelRemainInTank = fuelQuantityPerCm[128];
//         break;
//         case 130:
//         fuelRemainInTank = fuelQuantityPerCm[129];
//         break;
//         case 131:
//         fuelRemainInTank = fuelQuantityPerCm[130];
//         break;
//         case 132:
//         fuelRemainInTank = fuelQuantityPerCm[131];
//         break;
//         case 133:
//         fuelRemainInTank = fuelQuantityPerCm[132];
//         break;
//         case 134:
//         fuelRemainInTank = fuelQuantityPerCm[133];
//         break;
//         case 135:
//         fuelRemainInTank = fuelQuantityPerCm[134];
//         break;
//         case 136:
//         fuelRemainInTank = fuelQuantityPerCm[135];
//         break;
//         case 137:
//         fuelRemainInTank = fuelQuantityPerCm[136];
//         break;
//         case 138:
//         fuelRemainInTank = fuelQuantityPerCm[137];
//         break;
//         case 139:
//         fuelRemainInTank = fuelQuantityPerCm[138];
//         break;
//         case 140:
//         fuelRemainInTank = fuelQuantityPerCm[139];
//         break;
//         case 141:
//         fuelRemainInTank = fuelQuantityPerCm[140];
//         break;
//         case 142:
//         fuelRemainInTank = fuelQuantityPerCm[141];
//         break;
//         case 143:
//         fuelRemainInTank = fuelQuantityPerCm[142];
//         break;
//         case 144:
//         fuelRemainInTank = fuelQuantityPerCm[143];
//         break;
//         case 145:
//         fuelRemainInTank = fuelQuantityPerCm[144];
//         break;
//         case 146:
//         fuelRemainInTank = fuelQuantityPerCm[145];
//         break;
//         case 147:
//         fuelRemainInTank = fuelQuantityPerCm[146];
//         break;
//         case 148:
//         fuelRemainInTank = fuelQuantityPerCm[147];
//         break;
//         case 149:
//         fuelRemainInTank = fuelQuantityPerCm[148];
//         break;
//         case 150:
//         fuelRemainInTank = fuelQuantityPerCm[149];
//         break;
//         case 151:
//         fuelRemainInTank = fuelQuantityPerCm[150];
//         break;
//         case 152:
//         fuelRemainInTank = fuelQuantityPerCm[151];
//         break;
//         case 153:
//         fuelRemainInTank = fuelQuantityPerCm[152];
//         break;
//         case 154:
//         fuelRemainInTank = fuelQuantityPerCm[153];
//         break;
//         case 155:
//         fuelRemainInTank = fuelQuantityPerCm[154];
//         break;
//         case 156:
//         fuelRemainInTank = fuelQuantityPerCm[155];
//         break;
//         case 157:
//         fuelRemainInTank = fuelQuantityPerCm[156];
//         break;
//         case 158:
//         fuelRemainInTank = fuelQuantityPerCm[157];
//         break;
//         case 159:
//         fuelRemainInTank = fuelQuantityPerCm[158];
//         break;
//         case 160:
//         fuelRemainInTank = fuelQuantityPerCm[159];
//         break;
//         case 161:
//         fuelRemainInTank = fuelQuantityPerCm[160];
//         break;
//         case 162:
//         fuelRemainInTank = fuelQuantityPerCm[161];
//         break;
//         case 163:
//         fuelRemainInTank = fuelQuantityPerCm[162];
//         break;
//         case 164:
//         fuelRemainInTank = fuelQuantityPerCm[163];
//         break;
//         case 165:
//         fuelRemainInTank = fuelQuantityPerCm[164];
//         break;
//         case 166:
//         fuelRemainInTank = fuelQuantityPerCm[165];
//         break;
//         case 167:
//         fuelRemainInTank = fuelQuantityPerCm[166];
//         break;
//         case 168:
//         fuelRemainInTank = fuelQuantityPerCm[167];
//         break;
//         case 169:
//         fuelRemainInTank = fuelQuantityPerCm[168];
//         break;
//         case 170:
//         fuelRemainInTank = fuelQuantityPerCm[169];
//         break;
//         case 171:
//         fuelRemainInTank = fuelQuantityPerCm[170];
//         break;
//         case 172:
//         fuelRemainInTank = fuelQuantityPerCm[171];
//         break;
//         case 173:
//         fuelRemainInTank = fuelQuantityPerCm[172];
//         break;
//         case 174:
//         fuelRemainInTank = fuelQuantityPerCm[173];
//         break;
//         case 175:
//         fuelRemainInTank = fuelQuantityPerCm[174];
//         break;
//         case 176:
//         fuelRemainInTank = fuelQuantityPerCm[175];
//         break;
//         case 177:
//         fuelRemainInTank = fuelQuantityPerCm[176];
//         break;
//         case 178:
//         fuelRemainInTank = fuelQuantityPerCm[177];
//         break;
//         case 179:
//         fuelRemainInTank = fuelQuantityPerCm[178];
//         break;
//         case 180:
//         fuelRemainInTank = fuelQuantityPerCm[179];
//         break;
//         case 181:
//         fuelRemainInTank = fuelQuantityPerCm[180];
//         break;
//         case 182:
//         fuelRemainInTank = fuelQuantityPerCm[181];
//         break;
//         case 183:
//         fuelRemainInTank = fuelQuantityPerCm[182];
//         break;
//         case 184:
//         fuelRemainInTank = fuelQuantityPerCm[183];
//         break;
//         case 185:
//         fuelRemainInTank = fuelQuantityPerCm[184];
//         break;
//         case 186:
//         fuelRemainInTank = fuelQuantityPerCm[185];
//         break;
//         case 187:
//         fuelRemainInTank = fuelQuantityPerCm[186];
//         break;
//         case 188:
//         fuelRemainInTank = fuelQuantityPerCm[187];
//         break;
//         case 189:
//         fuelRemainInTank = fuelQuantityPerCm[188];
//         break;
//         case 190:
//         fuelRemainInTank = fuelQuantityPerCm[189];
//         break;
//         case 191:
//         fuelRemainInTank = fuelQuantityPerCm[189];
//         break;
//         case 192:
//         fuelRemainInTank = fuelQuantityPerCm[190];
//         break;
//         case 193:
//         fuelRemainInTank = fuelQuantityPerCm[192];
//         break;
//         case 194:
//         fuelRemainInTank = fuelQuantityPerCm[193];
//         break;
//         case 195:
//         fuelRemainInTank = fuelQuantityPerCm[194];
//         break;
//         case 196:
//         fuelRemainInTank = fuelQuantityPerCm[195];
//         break;
//         case 197:
//         fuelRemainInTank = fuelQuantityPerCm[196];
//         break;
//         case 198:
//         fuelRemainInTank = fuelQuantityPerCm[197];
//         break;
//         case 199:
//         fuelRemainInTank = fuelQuantityPerCm[198];
//         break;
//         case 200:
//         fuelRemainInTank = fuelQuantityPerCm[199];
//         break; 
//         case 201:
//         fuelRemainInTank = fuelQuantityPerCm[200];
//         break;
//         case 200:
//         fuelRemainInTank = fuelQuantityPerCm[199];
//         break; 
//         case 201:
//         fuelRemainInTank = fuelQuantityPerCm[200];
//         break;
//         case 202:
//         fuelRemainInTank = fuelQuantityPerCm[201];
//         break; 
//         case 203:
//         fuelRemainInTank = gfuelQuantityPerCm[202];
//         break;
//         case 204:
//         fuelRemainInTank = fuelQuantityPerCm[203];
//         break; 
//         case 205:
//         fuelRemainInTank = fuelQuantityPerCm[206];
//         break;
//         case 206:
//         fuelRemainInTank = fuelQuantityPerCm[205];
//         break; 
//         case 207:
//         fuelRemainInTank = fuelQuantityPerCm[206];
//         break;
//         case 208:
//         fuelRemainInTank = fuelQuantityPerCm[207];
//         break; 
//         case 209:
//         fuelRemainInTank = fuelQuantityPerCm[208];
//         break;
//         case 210:
//         fuelRemainInTank = fuelQuantityPerCm[209];
//         break; 
//         case 211:
//         fuelRemainInTank = fuelQuantityPerCm[209];
//         break;
//         case 212:
//         fuelRemainInTank = fuelQuantityPerCm[211];
//         break; 
//         case 213:
//         fuelRemainInTank = fuelQuantityPerCm[212];
//         break;
//         case 214:
//         fuelRemainInTank = fuelQuantityPerCm[213];
//         break; 
//         case 215:
//         fuelRemainInTank = fuelQuantityPerCm[214];
//         break;
//         case 216:
//         fuelRemainInTank = fuelQuantityPerCm[215];
//         break; 
//         case 217:
//         fuelRemainInTank = fuelQuantityPerCm[216];
//         break;
//         case 218:
//         fuelRemainInTank = fuelQuantityPerCm[216];
//         break; 
//         case 219:
//         fuelRemainInTank = fuelQuantityPerCm[218];
//         break;
//         case 220:
//         fuelRemainInTank = fuelQuantityPerCm[219];
//         break; 
//         case 221:
//         fuelRemainInTank = fuelQuantityPerCm[220];
//         break;
//         case 222:
//         fuelRemainInTank = fuelQuantityPerCm[221];
//         break; 
//         case 223:
//         fuelRemainInTank = fuelQuantityPerCm[222];
//         break;
//         case 224:
//         fuelRemainInTank = fuelQuantityPerCm[223];
//         break; 
//         case 225:
//         fuelRemainInTank = fuelQuantityPerCm[224];
//         break;
//         case 226:
//         fuelRemainInTank = fuelQuantityPerCm[225];
//         break; 
//         case 227:
//         fuelRemainInTank = fuelQuantityPerCm[226];
//         break;
//         case 228:
//         fuelRemainInTank = fuelQuantityPerCm[227];
//         break; 
//         case 229:
//         fuelRemainInTank = fuelQuantityPerCm[228];
//         break;
//         case 230:
//         fuelRemainInTank = fuelQuantityPerCm[229];
//         break; 
//         case 231:
//         fuelRemainInTank = fuelQuantityPerCm[230];
//         break;
//         case 232:
//         fuelRemainInTank = fuelQuantityPerCm[231];
//         break; 
//         case 233:
//         fuelRemainInTank = fuelQuantityPerCm[232];
//         break;
//         case 234:
//         fuelRemainInTank = fuelQuantityPerCm[233];
//         break; 
//         case 235:
//         fuelRemainInTank = fuelQuantityPerCm[234];
//         break;
//         case 236:
//         fuelRemainInTank = fuelQuantityPerCm[235];
//         break; 
//         case 237:
//         fuelRemainInTank = fuelQuantityPerCm[236];
//         break;
//         case 238:
//         fuelRemainInTank = fuelQuantityPerCm[237];
//         break; 
//         case 239:
//         fuelRemainInTank = fuelQuantityPerCm[238];
//         break;
//         case 240:
//         fuelRemainInTank = fuelQuantityPerCm[239];
//         break; 
//         case 241:
//         fuelRemainInTank = fuelQuantityPerCm[240];
//         break;
//         case 242:
//         fuelRemainInTank = fuelQuantityPerCm[241];
//         break; 
//         case 243:
//         fuelRemainInTank = fuelQuantityPerCm[242];
//         break;
//         case 244:
//         fuelRemainInTank = fuelQuantityPerCm[243];
//         break; 
//         case 245:
//         fuelRemainInTank = fuelQuantityPerCm[244];
//         break;
//         case 246:
//         fuelRemainInTank = fuelQuantityPerCm[245];
//         break; 
//         case 247:
//         fuelRemainInTank = fuelQuantityPerCm[246];
//         break;
//         case 248:
//         fuelRemainInTank = fuelQuantityPerCm[247];
//         break;
//         case 249:
//         fuelRemainInTank = fuelQuantityPerCm[248];
//         default:
//             fuelRemainInTank = "En attente de données";

//     }

    document.getElementById("fuelRestant20k").innerHTML = fuelRemainInTank;
}  

calculGo20k();