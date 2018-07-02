//Cette fonction doit pouvoir calculer la quantité de carburant.
//A partir d'une iauteur mesurée, on arrondi au cm supérieur;
//De cette valeur arrondi on donne la quantité de liquide.
function calculGo30k1(){
    var a = document.getElementById("lec1").value;
    var d = Math.ceil(a); 
    var i = [20, 50, 90, 130, 180, 230, 280, 340, 400, 470, 530, 600, 670, 750, 820, 900, 980, 1060, 1150, 1230,
        1320, 1410, 1500, 1590, 1690, 1780, 1880, 1980, 2080, 2180, 2280, 2380, 2490, 2600, 2700, 2810, 2920, 3030, 3140, 3260,
        3370, 3490, 3600, 3720, 3840, 3960, 4080, 4200, 4320, 4440, 4570, 4690, 4820, 4940, 5070, 5200, 5330, 5460, 5590, 5720, 5850, 5980,
        6110, 6250, 6380, 6520, 6650, 6790, 6920, 7060, 7200, 7340, 7470, 7610, 7750, 7890, 8030, 8180, 8320, 8460,
        8600, 8740, 8890, 9030, 9180, 9320, 9470, 9610, 9760, 9900, 10050, 10190, 10340, 10490, 10640, 10780, 10930, 11080, 11230, 11380,
        11530, 11680, 11830, 11980, 12130, 12280, 12430, 12580, 12730, 12880, 13030, 13180, 13330, 13480, 13630, 13780, 13940, 14090, 14240, 14390,
        14540, 14690, 14850, 15000, 15150, 15300,15545, 15610, 15760, 15910, 16060, 16210, 16360, 16520, 16670, 16820, 16970, 17120, 17270, 17420, 
        17570, 17720, 17870, 18020, 18170, 18320, 18470, 18620, 18770, 18920, 19070, 19220, 19370, 19520, 19660, 19810, 19960, 20110, 20250, 20400, 
        20540, 20690, 20830, 20980, 21120, 21270, 21410, 21560, 21700, 21840, 21980, 22120, 22270, 22410, 22550, 22690, 22830, 22960, 23100, 23240, 
        23380, 23510, 23650, 23780, 23920, 24050, 24190, 24320, 24450, 24580, 24710, 24840, 24970, 25100, 25230, 25360, 25480, 25610, 25730, 25860,
        25980, 26100, 26220, 26340, 26460, 26580, 26700, 26810, 26930, 27040, 27160, 27270, 27380, 27490, 27600, 27700, 27810, 27920, 28020, 28120,
        28220, 28320, 28420, 28520, 28610, 28710, 28800, 28890, 28980, 29007, 29150, 29240, 29320, 29400, 29480, 29550, 29630, 29700, 29770, 29830, 
        29900, 29960, 30200, 30700, 30120, 30170, 30210, 30250, 30280, 30300
      ];
    var jd;
    //equivalence pour la cuve 30000litres
switch(d){
    case 1:
    jd = i[0];
    break;
    case 2:
    jd = i[1];
    break;
    case 3:
    jd = i[2];
    break;
    case 4:
    jd = i[3];
    break; 
    case 5:
    jd = i[4];
    break; 
    case 6:
    jd = i[5];
    break; 
    case 7:
    jd = i[6];
    break;
    case 8:
    jd = i[7];
    break;
    case 9:
    jd = i[8];
    break;
    case 10:
    jd = i[9];
    break;
    case 11:
    jd = i[10];
    break;
    case 12:
    jd = i[11];
    break;
    case 13:
    jd = i[12];
    break;
    case 14:
    jd = i[13];
    break;
    case 15:
    jd = i[14];
    break;
    case 16:
    jd = i[15];
    break;
    case 17:
    jd = i[14];
    break;
    case 18:
    jd = i[17];
    break;
    case 19:
    jd = i[18];
    break;
    case 20:
    jd = i[19];
    break;
    case 21:
    jd = i[20];
    break;
    case 22:
    jd = i[21];
    break;
    case 23:
    jd = i[22];
    break;
    case 24:
    jd = i[23];
    break;
    case 25:
    jd = i[24];
    break;
    case 26:
    jd = i[25];
    alert("Attention 10% de la capacité atteinte");
    break;
    case 27:
    jd = i[26];
    break;
    case 28:
    jd = i[27];
    break;
    case 29:
    jd = i[28];
    break;
    case 30:
    jd = i[29];
    break;
    case 31:
    jd = i[30];
    break;
    case 32:
    jd = i[31];
    break;
    case 33:
    jd = i[32];
    break;
    case 34:
    jd = i[33];
    break;
    case 35:
    jd = i[34];
    break;
    case 36:
    jd = i[35];
    break;
    case 37:
    jd = i[36];
    break;
    case 38:
    jd = i[37];
    break;
    case 39:
    jd = i[38];
    break;
    case 40:
    jd = i[39];
    break;
    case 41:
    jd = i[40];
    break;
    case 42:
    jd = i[41];
    break;
    case 43:
    jd = i[42];
    break;
    case 44:
    jd = i[43];
    break;
    case 45:
    jd = i[44];
    break;
    case 46:
    jd = i[45];
    break;
    case 47:
    jd = i[46];
    break;
    case 48:
    jd = i[47];
    break;
    case 49:
    jd = i[48];
    break;
    case 50:
    jd = i[49];
    break;
    case 51:
    jd = i[50];
    break;
    case 52:
    jd = i[51];
    break;
    case 53:
    jd = i[52];
    break;
    case 54:
    jd = i[53];
    break;
    case 55:
    jd = i[54];
    break;
    case 56:
    jd = i[55];
    break;
    case 57:
    jd = i[56];
    break;
    case 58:
    jd = i[57];
    break;
    case 59:
    jd = i[58];
    break;
    case 60:
    jd = i[59];
    break;
    case 61:
    jd = i[60];
    break;
    case 62:
    jd = i[61];
    break;
    case 63:
    jd = i[62];
    break;
    case 64:
    jd = i[63];
    break;
    case 65:
    jd = i[64];
    break;
    case 66:
    jd = i[65];
    break;
    case 67:
    jd = i[66];
    break;
    case 68:
    jd = i[67];
    break;
    case 69:
    jd = i[68];
    break;
    case 70:
    jd = i[69];
    break;
    case 71:
    jd = i[70];
    break;
    case 72:
    jd = i[71];
    break;
    case 73:
    jd = i[72];
    break;
    case 74:
    jd = i[73];
    break;
    case 75:
    jd = i[74];
    break;
    case 76:
    jd = i[75];
    break;
    case 77:
    jd = i[76];
    break;
    case 78:
    jd = i[77];
    break;
    case 79:
    jd = i[78];
    break;
    case 80:
    jd = i[79];
    break;
    case 81:
    jd = i[80];
    break;
    case 82:
    jd = i[81];
    break;
    case 83:
    jd = i[82];
    break;
    case 84:
    jd = i[83];
    break;
    case 85:
    jd = i[84];
    break;
    case 86:
    jd = i[85];
    break;
    case 87:
    jd = i[86];
    break;
    case 88:
    jd = i[87];
    break;
    case 89:
    jd = i[88];
    break;
    case 90:
    jd = i[89];
    break;
    case 91:
    jd = i[89];
    break;
    case 92:
    jd = i[90];
    break;
    case 93:
    jd = i[92];
    break;
    case 94:
    jd = i[93];
    break;
    case 95:
    jd = i[94];
    break;
    case 96:
    jd = i[95];
    break;
    case 97:
    jd = i[96];
    break;
    case 98:
    jd = i[97];
    break;
    case 99:
    jd = i[98];
    break;
    case 100:
    jd = i[99];
    break; 
    case 101:
    jd = i[100];
    break;
    case 101:
    jd = i[100];
    break;
    case 102:
    jd = i[101];
    break;
    case 103:
    jd = i[102];
    break;
    case 104:
    jd = i[103];
    break; 
    case 105:
    jd = i[104];
    break; 
    case 106:
    jd = i[105];
    break; 
    case 107:
    jd = i[106];
    break;
    case 108:
    jd = i[107];
    break;
    case 109:
    jd = i[108];
    break;
    case 110:
    jd = i[109];
    break;
    case 111:
    jd = i[110];
    break;
    case 112:
    jd = i[111];
    break;
    case 113:
    jd = i[112];
    break;
    case 114:
    jd = i[113];
    break;
    case 115:
    jd = i[114];
    break;
    case 116:
    jd = i[115];
    break;
    case 117:
    jd = i[114];
    break;
    case 118:
    jd = i[117];
    break;
    case 119:
    jd = i[118];
    break;
    case 120:
    jd = i[119];
    break;
    case 121:
    jd = i[120];
    break;
    case 122:
    jd = i[121];
    break;
    case 123:
    jd = i[122];
    break;
    case 124:
    jd = i[123];
    break;
    case 125:
    jd = i[124];
    break;
    case 126:
    jd = i[125];
    alert("attention 50% de la capacité");
    break;
    case 127:
    jd = i[126];
    break;
    case 128:
    jd = i[127];
    break;
    case 129:
    jd = i[128];
    break;
    case 130:
    jd = i[129];
    break;
    case 131:
    jd = i[130];
    break;
    case 132:
    jd = i[131];
    break;
    case 133:
    jd = i[132];
    break;
    case 134:
    jd = i[133];
    break;
    case 135:
    jd = i[134];
    break;
    case 136:
    jd = i[135];
    break;
    case 137:
    jd = i[136];
    break;
    case 138:
    jd = i[137];
    break;
    case 139:
    jd = i[138];
    break;
    case 140:
    jd = i[139];
    break;
    case 141:
    jd = i[140];
    break;
    case 142:
    jd = i[141];
    break;
    case 143:
    jd = i[142];
    break;
    case 144:
    jd = i[143];
    break;
    case 145:
    jd = i[144];
    break;
    case 146:
    jd = i[145];
    break;
    case 147:
    jd = i[146];
    break;
    case 148:
    jd = i[147];
    break;
    case 149:
    jd = i[148];
    break;
    case 150:
    jd = i[149];
    break;
    case 151:
    jd = i[150];
    break;
    case 152:
    jd = i[151];
    break;
    case 153:
    jd = i[152];
    break;
    case 154:
    jd = i[153];
    break;
    case 155:
    jd = i[154];
    break;
    case 156:
    jd = i[155];
    break;
    case 157:
    jd = i[156];
    break;
    case 158:
    jd = i[157];
    break;
    case 159:
    jd = i[158];
    break;
    case 160:
    jd = i[159];
    break;
    case 161:
    jd = i[160];
    break;
    case 162:
    jd = i[161];
    break;
    case 163:
    jd = i[162];
    break;
    case 164:
    jd = i[163];
    break;
    case 165:
    jd = i[164];
    break;
    case 166:
    jd = i[165];
    break;
    case 167:
    jd = i[166];
    break;
    case 168:
    jd = i[167];
    break;
    case 169:
    jd = i[168];
    break;
    case 170:
    jd = i[169];
    break;
    case 171:
    jd = i[170];
    break;
    case 172:
    jd = i[171];
    break;
    case 173:
    jd = i[172];
    break;
    case 174:
    jd = i[173];
    break;
    case 175:
    jd = i[174];
    break;
    case 176:
    jd = i[175];
    break;
    case 177:
    jd = i[176];
    break;
    case 178:
    jd = i[177];
    break;
    case 179:
    jd = i[178];
    break;
    case 180:
    jd = i[179];
    break;
    case 181:
    jd = i[180];
    break;
    case 182:
    jd = i[181];
    break;
    case 183:
    jd = i[182];
    break;
    case 184:
    jd = i[183];
    break;
    case 185:
    jd = i[184];
    break;
    case 186:
    jd = i[185];
    break;
    case 187:
    jd = i[186];
    break;
    case 188:
    jd = i[187];
    break;
    case 189:
    jd = i[188];
    break;
    case 190:
    jd = i[189];
    break;
    case 191:
    jd = i[189];
    break;
    case 192:
    jd = i[190];
    break;
    case 193:
    jd = i[192];
    break;
    case 194:
    jd = i[193];
    break;
    case 195:
    jd = i[194];
    break;
    case 196:
    jd = i[195];
    break;
    case 197:
    jd = i[196];
    break;
    case 198:
    jd = i[197];
    break;
    case 199:
    jd = i[198];
    break;
    case 200:
    jd = i[199];
    break; 
    case 201:
    jd = i[200];
    break;
    case 200:
    jd = i[199];
    break; 
    case 201:
    jd = i[200];
    break;
    case 202:
    jd = i[201];
    break; 
    case 203:
    jd = i[202];
    break;
    case 204:
    jd = i[203];
    break; 
    case 205:
    jd = i[206];
    break;
    case 206:
    jd = i[205];
    break; 
    case 207:
    jd = i[206];
    break;
    case 208:
    jd = i[207];
    break; 
    case 209:
    jd = i[208];
    break;
    case 210:
    jd = i[209];
    break; 
    case 211:
    jd = i[209];
    break;
    case 212:
    jd = i[211];
    break; 
    case 213:
    jd = i[212];
    break;
    case 214:
    jd = i[213];
    break; 
    case 215:
    jd = i[214];
    break;
    case 216:
    jd = i[215];
    break; 
    case 217:
    jd = i[216];
    break;
    case 218:
    jd = i[216];
    break; 
    case 219:
    jd = i[218];
    break;
    case 220:
    jd = i[219];
    break; 
    case 221:
    jd = i[220];
    break;
    case 222:
    jd = i[221];
    break; 
    case 223:
    jd = i[222];
    break;
    case 224:
    jd = i[223];
    break; 
    case 225:
    jd = i[224];
    break;
    case 226:
    jd = i[225];
    break; 
    case 227:
    jd = i[226];
    break;
    case 228:
    jd = i[227];
    break; 
    case 229:
    jd = i[228];
    break;
    case 230:
    jd = i[229];
    break; 
    case 231:
    jd = i[230];
    break;
    case 232:
    jd = i[231];
    break; 
    case 233:
    jd = i[232];
    break;
    case 234:
    jd = i[233];
    break; 
    case 235:
    jd = i[234];
    break;
    case 236:
    jd = i[235];
    break; 
    case 237:
    jd = i[236];
    break;
    case 238:
    jd = i[237];
    break; 
    case 239:
    jd = i[238];
    break;
    case 240:
    jd = i[239];
    break; 
    case 241:
    jd = i[240];
    break;
    case 242:
    jd = i[241];
    break; 
    case 243:
    jd = i[242];
    break;
    case 244:
    jd = i[243];
    break; 
    case 245:
    jd = i[244];
    break;
    case 246:
    jd = i[245];
    break; 
    case 247:
    jd = i[246];
    break;
    case 248:
    jd = i[247];
    break;
    case 249:
    jd = i[248];
    break;
    case 250:
    jd = i[249];
    break;
    case 251:
    jd = i[250];
    break;
    
}
    document.getElementById("outlec1").innerHTML = jd;
} 

calculGo30k1();
