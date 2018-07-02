//Cette fonction doit pouvoir calculer la quantité de carburant.
//A partir d'une hauteur mesurée, on arrondi au cm supérieur;
//De cette valeur arrondie on donne la quantité de liquide.
function calculGo20k(){
    var b = document.getElementById("lec2").value;
    var e = Math.ceil(b);
    var g = [8, 23, 42, 64, 89,117, 148, 180, 216, 252, 291 ,332, 373, 418, 464, 511, 560, 609, 661, 714,
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
   
    var je;
/*equivalence pour la cuve 20000litres*/
    switch(e){
        case 1:
        je = g[0];
        break;
        case 2:
        je = g[1];
        break;
        case 3:
        je = g[2];
        break;
        case 4:
        je = g[3];
        break; 
        case 5:
        je = g[4];
        break; 
        case 6:
        je = g[5];
        break; 
        case 7:
        je = g[6];
        break;
        case 8:
        je = g[7];
        break;
        case 9:
        je = g[8];
        break;
        case 10:
        je = g[9];
        break;
        case 11:
        je = g[10];
        break;
        case 12:
        je = g[11];
        break;
        case 13:
        je = g[12];
        break;
        case 14:
        je = g[13];
        break;
        case 15:
        je = g[14];
        break;
        case 16:
        je = g[15];
        break;
        case 17:
        je = g[14];
        break;
        case 18:
        je = g[17];
        break;
        case 19:
        je = g[18];
        break;
        case 20:
        je = g[19];
        break;
        case 21:
        je = g[20];
        break;
        case 22:
        je = g[21];
        break;
        case 23:
        je = g[22];
        break;
        case 24:
        je = g[23];
        break;
        case 25:
        je = g[24];
        alert("Attention 10% de la capacité atteinte");
        break;
        case 26:
        je = g[25];
        break;
        case 27:
        je = g[26];
        break;
        case 28:
        je = g[27];
        break;
        case 29:
        je = g[28];
        break;
        case 30:
        je = g[29];
        break;
        case 31:
        je = g[30];
        break;
        case 32:
        je = g[31];
        break;
        case 33:
        je = g[32];
        break;
        case 34:
        je = g[33];
        break;
        case 35:
        je = g[34];
        break;
        case 36:
        je = g[35];
        break;
        case 37:
        je = g[36];
        break;
        case 38:
        je = g[37];
        break;
        case 39:
        je = g[38];
        break;
        case 40:
        je = g[39];
        break;
        case 41:
        je = g[40];
        break;
        case 42:
        je = g[41];
        break;
        case 43:
        je = g[42];
        break;
        case 44:
        je = g[43];
        break;
        case 45:
        je = g[44];
        break;
        case 46:
        je = g[45];
        break;
        case 47:
        je = g[46];
        break;
        case 48:
        je = g[47];
        break;
        case 49:
        je = g[48];
        break;
        case 50:
        je = g[49];
        break;
        case 51:
        je = g[50];
        break;
        case 52:
        je = g[51];
        break;
        case 53:
        je = g[52];
        break;
        case 54:
        je = g[53];
        break;
        case 55:
        je = g[54];
        break;
        case 56:
        je = g[55];
        break;
        case 57:
        je = g[56];
        break;
        case 58:
        je = g[57];
        break;
        case 59:
        je = g[58];
        break;
        case 60:
        je = g[59];
        break;
        case 61:
        je = g[60];
        break;
        case 62:
        je = g[61];
        break;
        case 63:
        je = g[62];
        break;
        case 64:
        je = g[63];
        break;
        case 65:
        je = g[64];
        break;
        case 66:
        je = g[65];
        break;
        case 67:
        je = g[66];
        break;
        case 68:
        je = g[67];
        break;
        case 69:
        je = g[68];
        break;
        case 70:
        je = g[69];
        break;
        case 71:
        je = g[70];
        break;
        case 72:
        je = g[71];
        break;
        case 73:
        je = g[72];
        break;
        case 74:
        je = g[73];
        break;
        case 75:
        je = g[74];
        break;
        case 76:
        je = g[75];
        break;
        case 77:
        je = g[76];
        break;
        case 78:
        je = g[77];
        break;
        case 79:
        je = g[78];
        break;
        case 80:
        je = g[79];
        break;
        case 81:
        je = g[80];
        break;
        case 82:
        je = g[81];
        break;
        case 83:
        je = g[82];
        break;
        case 84:
        je = g[83];
        break;
        case 85:
        je = g[84];
        break;
        case 86:
        je = g[85];
        break;
        case 87:
        je = g[86];
        break;
        case 88:
        je = g[87];
        break;
        case 89:
        je = g[88];
        break;
        case 90:
        je = g[89];
        break;
        case 91:
        je = g[89];
        break;
        case 92:
        je = g[90];
        break;
        case 93:
        je = g[92];
        break;
        case 94:
        je = g[93];
        break;
        case 95:
        je = g[94];
        break;
        case 96:
        je = g[95];
        break;
        case 97:
        je = g[96];
        break;
        case 98:
        je = g[97];
        break;
        case 99:
        je = g[98];
        break;
        case 100:
        je = g[99];
        break; 
        case 101:
        je = g[100];
        break;
        case 101:
        je = g[100];
        break;
        case 102:
        je = g[101];
        break;
        case 103:
        je = g[102];
        break;
        case 104:
        je = g[103];
        break; 
        case 105:
        je = g[104];
        break; 
        case 106:
        je = g[105];
        break; 
        case 107:
        je = g[106];
        break;
        case 108:
        je = g[107];
        break;
        case 109:
        je = g[108];
        break;
        case 110:
        je = g[109];
        break;
        case 111:
        je = g[110];
        break;
        case 112:
        je = g[111];
        break;
        case 113:
        je = g[112];
        break;
        case 114:
        je = g[113];
        break;
        case 115:
        je = g[114];
        break;
        case 116:
        je = g[115];
        break;
        case 117:
        je = g[114];
        break;
        case 118:
        je = g[117];
        break;
        case 119:
        je = g[118];
        break;
        case 120:
        je = g[119];
        break;
        case 121:
        je = g[120];
        break;
        case 122:
        je = g[121];
        break;
        case 123:
        je = g[122];
        break;
        case 124:
        je = g[123];
        break;
        case 125:
        je = g[124];
        alert("attention 50% de la capacité");
        break;
        case 126:
        je = g[125];
        break;
        case 127:
        je = g[126];
        break;
        case 128:
        je = g[127];
        break;
        case 129:
        je = g[128];
        break;
        case 130:
        je = g[129];
        break;
        case 131:
        je = g[130];
        break;
        case 132:
        je = g[131];
        break;
        case 133:
        je = g[132];
        break;
        case 134:
        je = g[133];
        break;
        case 135:
        je = g[134];
        break;
        case 136:
        je = g[135];
        break;
        case 137:
        je = g[136];
        break;
        case 138:
        je = g[137];
        break;
        case 139:
        je = g[138];
        break;
        case 140:
        je = g[139];
        break;
        case 141:
        je = g[140];
        break;
        case 142:
        je = g[141];
        break;
        case 143:
        je = g[142];
        break;
        case 144:
        je = g[143];
        break;
        case 145:
        je = g[144];
        break;
        case 146:
        je = g[145];
        break;
        case 147:
        je = g[146];
        break;
        case 148:
        je = g[147];
        break;
        case 149:
        je = g[148];
        break;
        case 150:
        je = g[149];
        break;
        case 151:
        je = g[150];
        break;
        case 152:
        je = g[151];
        break;
        case 153:
        je = g[152];
        break;
        case 154:
        je = g[153];
        break;
        case 155:
        je = g[154];
        break;
        case 156:
        je = g[155];
        break;
        case 157:
        je = g[156];
        break;
        case 158:
        je = g[157];
        break;
        case 159:
        je = g[158];
        break;
        case 160:
        je = g[159];
        break;
        case 161:
        je = g[160];
        break;
        case 162:
        je = g[161];
        break;
        case 163:
        je = g[162];
        break;
        case 164:
        je = g[163];
        break;
        case 165:
        je = g[164];
        break;
        case 166:
        je = g[165];
        break;
        case 167:
        je = g[166];
        break;
        case 168:
        je = g[167];
        break;
        case 169:
        je = g[168];
        break;
        case 170:
        je = g[169];
        break;
        case 171:
        je = g[170];
        break;
        case 172:
        je = g[171];
        break;
        case 173:
        je = g[172];
        break;
        case 174:
        je = g[173];
        break;
        case 175:
        je = g[174];
        break;
        case 176:
        je = g[175];
        break;
        case 177:
        je = g[176];
        break;
        case 178:
        je = g[177];
        break;
        case 179:
        je = g[178];
        break;
        case 180:
        je = g[179];
        break;
        case 181:
        je = g[180];
        break;
        case 182:
        je = g[181];
        break;
        case 183:
        je = g[182];
        break;
        case 184:
        je = g[183];
        break;
        case 185:
        je = g[184];
        break;
        case 186:
        je = g[185];
        break;
        case 187:
        je = g[186];
        break;
        case 188:
        je = g[187];
        break;
        case 189:
        je = g[188];
        break;
        case 190:
        je = g[189];
        break;
        case 191:
        je = g[189];
        break;
        case 192:
        je = g[190];
        break;
        case 193:
        je = g[192];
        break;
        case 194:
        je = g[193];
        break;
        case 195:
        je = g[194];
        break;
        case 196:
        je = g[195];
        break;
        case 197:
        je = g[196];
        break;
        case 198:
        je = g[197];
        break;
        case 199:
        je = g[198];
        break;
        case 200:
        je = g[199];
        break; 
        case 201:
        je = g[200];
        break;
        case 200:
        je = g[199];
        break; 
        case 201:
        je = g[200];
        break;
        case 202:
        je = g[201];
        break; 
        case 203:
        je = g[202];
        break;
        case 204:
        je = g[203];
        break; 
        case 205:
        je = g[206];
        break;
        case 206:
        je = g[205];
        break; 
        case 207:
        je = g[206];
        break;
        case 208:
        je = g[207];
        break; 
        case 209:
        je = g[208];
        break;
        case 210:
        je = g[209];
        break; 
        case 211:
        je = g[209];
        break;
        case 212:
        je = g[211];
        break; 
        case 213:
        je = g[212];
        break;
        case 214:
        je = g[213];
        break; 
        case 215:
        je = g[214];
        break;
        case 216:
        je = g[215];
        break; 
        case 217:
        je = g[216];
        break;
        case 218:
        je = g[216];
        break; 
        case 219:
        je = g[218];
        break;
        case 220:
        je = g[219];
        break; 
        case 221:
        je = g[220];
        break;
        case 222:
        je = g[221];
        break; 
        case 223:
        je = g[222];
        break;
        case 224:
        je = g[223];
        break; 
        case 225:
        je = g[224];
        break;
        case 226:
        je = g[225];
        break; 
        case 227:
        je = g[226];
        break;
        case 228:
        je = g[227];
        break; 
        case 229:
        je = g[228];
        break;
        case 230:
        je = g[229];
        break; 
        case 231:
        je = g[230];
        break;
        case 232:
        je = g[231];
        break; 
        case 233:
        je = g[232];
        break;
        case 234:
        je = g[233];
        break; 
        case 235:
        je = g[234];
        break;
        case 236:
        je = g[235];
        break; 
        case 237:
        je = g[236];
        break;
        case 238:
        je = g[237];
        break; 
        case 239:
        je = g[238];
        break;
        case 240:
        je = g[239];
        break; 
        case 241:
        je = g[240];
        break;
        case 242:
        je = g[241];
        break; 
        case 243:
        je = g[242];
        break;
        case 244:
        je = g[243];
        break; 
        case 245:
        je = g[244];
        break;
        case 246:
        je = g[245];
        break; 
        case 247:
        je = g[246];
        break;
        case 248:
        je = g[247];
        break;
        case 249:
        je = g[248];
}

    document.getElementById("outlec2").innerHTML = je;
}  

calculGo20k();