/* Cette fonction renvoie la quantité restante de liquide dans une citerne 30 000 litres.
A partir d'une fuelQuantityPerCmauteur mesurée, on arrondi au cm supérieur;
De cette valeur arrondie on donne la quantité de liquide restant dans la citerne. */

function calculGo30k2()
{
    let getFuelHeigtValue = document.getElementById("lec4").value;

    let roundUpFuelHeightValue = Math.ceil(getFuelHeigtValue);

    const fuelQuantityPerCm = [20, 50, 90, 130, 180, 230, 280, 340, 400, 470, 530, 600, 670, 750, 820, 900, 980, 1060, 1150, 1230,
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
        29900, 29960, 30200, 30700, 30120, 30170, 30210, 30250, 30280, 30300];

    let fuelRemainInTank;

    switch(roundUpFuelHeightValue)
    {
    case 1:
    fuelRemainInTank = fuelQuantityPerCm[0];
    break;
    case 2:
    fuelRemainInTank = fuelQuantityPerCm[1];
    break;
    case 3:
    fuelRemainInTank = fuelQuantityPerCm[2];
    break;
    case 4:
    fuelRemainInTank = fuelQuantityPerCm[3];
    break; 
    case 5:
    fuelRemainInTank = fuelQuantityPerCm[4];
    break; 
    case 6:
    fuelRemainInTank = fuelQuantityPerCm[5];
    break; 
    case 7:
    fuelRemainInTank = fuelQuantityPerCm[6];
    break;
    case 8:
    fuelRemainInTank = fuelQuantityPerCm[7];
    break;
    case 9:
    fuelRemainInTank = fuelQuantityPerCm[8];
    break;
    case 10:
    fuelRemainInTank = fuelQuantityPerCm[9];
    break;
    case 11:
    fuelRemainInTank = fuelQuantityPerCm[10];
    break;
    case 12:
    fuelRemainInTank = fuelQuantityPerCm[11];
    break;
    case 13:
    fuelRemainInTank = fuelQuantityPerCm[12];
    break;
    case 14:
    fuelRemainInTank = fuelQuantityPerCm[13];
    break;
    case 15:
    fuelRemainInTank = fuelQuantityPerCm[14];
    break;
    case 16:
    fuelRemainInTank = fuelQuantityPerCm[15];
    break;
    case 17:
    fuelRemainInTank = fuelQuantityPerCm[14];
    break;
    case 18:
    fuelRemainInTank = fuelQuantityPerCm[17];
    break;
    case 19:
    fuelRemainInTank = fuelQuantityPerCm[18];
    break;
    case 20:
    fuelRemainInTank = fuelQuantityPerCm[19];
    break;
    case 21:
    fuelRemainInTank = fuelQuantityPerCm[20];
    break;
    case 22:
    fuelRemainInTank = fuelQuantityPerCm[21];
    break;
    case 23:
    fuelRemainInTank = fuelQuantityPerCm[22];
    break;
    case 24:
    fuelRemainInTank = fuelQuantityPerCm[23];
    break;
    case 25:
    fuelRemainInTank = fuelQuantityPerCm[24];
    break;
    case 26:
    fuelRemainInTank = fuelQuantityPerCm[25];
    alert("Attention 10% de la capacité atteinte");
    break;
    case 27:
    fuelRemainInTank = fuelQuantityPerCm[26];
    break;
    case 28:
    fuelRemainInTank = fuelQuantityPerCm[27];
    break;
    case 29:
    fuelRemainInTank = fuelQuantityPerCm[28];
    break;
    case 30:
    fuelRemainInTank = fuelQuantityPerCm[29];
    break;
    case 31:
    fuelRemainInTank = fuelQuantityPerCm[30];
    break;
    case 32:
    fuelRemainInTank = fuelQuantityPerCm[31];
    break;
    case 33:
    fuelRemainInTank = fuelQuantityPerCm[32];
    break;
    case 34:
    fuelRemainInTank = fuelQuantityPerCm[33];
    break;
    case 35:
    fuelRemainInTank = fuelQuantityPerCm[34];
    break;
    case 36:
    fuelRemainInTank = fuelQuantityPerCm[35];
    break;
    case 37:
    fuelRemainInTank = fuelQuantityPerCm[36];
    break;
    case 38:
    fuelRemainInTank = fuelQuantityPerCm[37];
    break;
    case 39:
    fuelRemainInTank = fuelQuantityPerCm[38];
    break;
    case 40:
    fuelRemainInTank = fuelQuantityPerCm[39];
    break;
    case 41:
    fuelRemainInTank = fuelQuantityPerCm[40];
    break;
    case 42:
    fuelRemainInTank = fuelQuantityPerCm[41];
    break;
    case 43:
    fuelRemainInTank = fuelQuantityPerCm[42];
    break;
    case 44:
    fuelRemainInTank = fuelQuantityPerCm[43];
    break;
    case 45:
    fuelRemainInTank = fuelQuantityPerCm[44];
    break;
    case 46:
    fuelRemainInTank = fuelQuantityPerCm[45];
    break;
    case 47:
    fuelRemainInTank = fuelQuantityPerCm[46];
    break;
    case 48:
    fuelRemainInTank = fuelQuantityPerCm[47];
    break;
    case 49:
    fuelRemainInTank = fuelQuantityPerCm[48];
    break;
    case 50:
    fuelRemainInTank = fuelQuantityPerCm[49];
    break;
    case 51:
    fuelRemainInTank = fuelQuantityPerCm[50];
    break;
    case 52:
    fuelRemainInTank = fuelQuantityPerCm[51];
    break;
    case 53:
    fuelRemainInTank = fuelQuantityPerCm[52];
    break;
    case 54:
    fuelRemainInTank = fuelQuantityPerCm[53];
    break;
    case 55:
    fuelRemainInTank = fuelQuantityPerCm[54];
    break;
    case 56:
    fuelRemainInTank = fuelQuantityPerCm[55];
    break;
    case 57:
    fuelRemainInTank = fuelQuantityPerCm[56];
    break;
    case 58:
    fuelRemainInTank = fuelQuantityPerCm[57];
    break;
    case 59:
    fuelRemainInTank = fuelQuantityPerCm[58];
    break;
    case 60:
    fuelRemainInTank = fuelQuantityPerCm[59];
    break;
    case 61:
    fuelRemainInTank = fuelQuantityPerCm[60];
    break;
    case 62:
    fuelRemainInTank = fuelQuantityPerCm[61];
    break;
    case 63:
    fuelRemainInTank = fuelQuantityPerCm[62];
    break;
    case 64:
    fuelRemainInTank = fuelQuantityPerCm[63];
    break;
    case 65:
    fuelRemainInTank = fuelQuantityPerCm[64];
    break;
    case 66:
    fuelRemainInTank = fuelQuantityPerCm[65];
    break;
    case 67:
    fuelRemainInTank = fuelQuantityPerCm[66];
    break;
    case 68:
    fuelRemainInTank = fuelQuantityPerCm[67];
    break;
    case 69:
    fuelRemainInTank = fuelQuantityPerCm[68];
    break;
    case 70:
    fuelRemainInTank = fuelQuantityPerCm[69];
    break;
    case 71:
    fuelRemainInTank = fuelQuantityPerCm[70];
    break;
    case 72:
    fuelRemainInTank = fuelQuantityPerCm[71];
    break;
    case 73:
    fuelRemainInTank = fuelQuantityPerCm[72];
    break;
    case 74:
    fuelRemainInTank = fuelQuantityPerCm[73];
    break;
    case 75:
    fuelRemainInTank = fuelQuantityPerCm[74];
    break;
    case 76:
    fuelRemainInTank = fuelQuantityPerCm[75];
    break;
    case 77:
    fuelRemainInTank = fuelQuantityPerCm[76];
    break;
    case 78:
    fuelRemainInTank = fuelQuantityPerCm[77];
    break;
    case 79:
    fuelRemainInTank = fuelQuantityPerCm[78];
    break;
    case 80:
    fuelRemainInTank = fuelQuantityPerCm[79];
    break;
    case 81:
    fuelRemainInTank = fuelQuantityPerCm[80];
    break;
    case 82:
    fuelRemainInTank = fuelQuantityPerCm[81];
    break;
    case 83:
    fuelRemainInTank = fuelQuantityPerCm[82];
    break;
    case 84:
    fuelRemainInTank = fuelQuantityPerCm[83];
    break;
    case 85:
    fuelRemainInTank = fuelQuantityPerCm[84];
    break;
    case 86:
    fuelRemainInTank = fuelQuantityPerCm[85];
    break;
    case 87:
    fuelRemainInTank = fuelQuantityPerCm[86];
    break;
    case 88:
    fuelRemainInTank = fuelQuantityPerCm[87];
    break;
    case 89:
    fuelRemainInTank = fuelQuantityPerCm[88];
    break;
    case 90:
    fuelRemainInTank = fuelQuantityPerCm[89];
    break;
    case 91:
    fuelRemainInTank = fuelQuantityPerCm[89];
    break;
    case 92:
    fuelRemainInTank = fuelQuantityPerCm[90];
    break;
    case 93:
    fuelRemainInTank = fuelQuantityPerCm[92];
    break;
    case 94:
    fuelRemainInTank = fuelQuantityPerCm[93];
    break;
    case 95:
    fuelRemainInTank = fuelQuantityPerCm[94];
    break;
    case 96:
    fuelRemainInTank = fuelQuantityPerCm[95];
    break;
    case 97:
    fuelRemainInTank = fuelQuantityPerCm[96];
    break;
    case 98:
    fuelRemainInTank = fuelQuantityPerCm[97];
    break;
    case 99:
    fuelRemainInTank = fuelQuantityPerCm[98];
    break;
    case 100:
    fuelRemainInTank = fuelQuantityPerCm[99];
    break; 
    case 101:
    fuelRemainInTank = fuelQuantityPerCm[100];
    break;
    case 101:
    fuelRemainInTank = fuelQuantityPerCm[100];
    break;
    case 102:
    fuelRemainInTank = fuelQuantityPerCm[101];
    break;
    case 103:
    fuelRemainInTank = fuelQuantityPerCm[102];
    break;
    case 104:
    fuelRemainInTank = fuelQuantityPerCm[103];
    break; 
    case 105:
    fuelRemainInTank = fuelQuantityPerCm[104];
    break; 
    case 106:
    fuelRemainInTank = fuelQuantityPerCm[105];
    break; 
    case 107:
    fuelRemainInTank = fuelQuantityPerCm[106];
    break;
    case 108:
    fuelRemainInTank = fuelQuantityPerCm[107];
    break;
    case 109:
    fuelRemainInTank = fuelQuantityPerCm[108];
    break;
    case 110:
    fuelRemainInTank = fuelQuantityPerCm[109];
    break;
    case 111:
    fuelRemainInTank = fuelQuantityPerCm[110];
    break;
    case 112:
    fuelRemainInTank = fuelQuantityPerCm[111];
    break;
    case 113:
    fuelRemainInTank = fuelQuantityPerCm[112];
    break;
    case 114:
    fuelRemainInTank = fuelQuantityPerCm[113];
    break;
    case 115:
    fuelRemainInTank = fuelQuantityPerCm[114];
    break;
    case 116:
    fuelRemainInTank = fuelQuantityPerCm[115];
    break;
    case 117:
    fuelRemainInTank = fuelQuantityPerCm[114];
    break;
    case 118:
    fuelRemainInTank = fuelQuantityPerCm[117];
    break;
    case 119:
    fuelRemainInTank = fuelQuantityPerCm[118];
    break;
    case 120:
    fuelRemainInTank = fuelQuantityPerCm[119];
    break;
    case 121:
    fuelRemainInTank = fuelQuantityPerCm[120];
    break;
    case 122:
    fuelRemainInTank = fuelQuantityPerCm[121];
    break;
    case 123:
    fuelRemainInTank = fuelQuantityPerCm[122];
    break;
    case 124:
    fuelRemainInTank = fuelQuantityPerCm[123];
    break;
    case 125:
    fuelRemainInTank = fuelQuantityPerCm[124];
    break;
    case 126:
    fuelRemainInTank = fuelQuantityPerCm[125];
    alert("attention 50% de la capacité");
    break;
    case 127:
    fuelRemainInTank = fuelQuantityPerCm[126];
    break;
    case 128:
    fuelRemainInTank = fuelQuantityPerCm[127];
    break;
    case 129:
    fuelRemainInTank = fuelQuantityPerCm[128];
    break;
    case 130:
    fuelRemainInTank = fuelQuantityPerCm[129];
    break;
    case 131:
    fuelRemainInTank = fuelQuantityPerCm[130];
    break;
    case 132:
    fuelRemainInTank = fuelQuantityPerCm[131];
    break;
    case 133:
    fuelRemainInTank = fuelQuantityPerCm[132];
    break;
    case 134:
    fuelRemainInTank = fuelQuantityPerCm[133];
    break;
    case 135:
    fuelRemainInTank = fuelQuantityPerCm[134];
    break;
    case 136:
    fuelRemainInTank = fuelQuantityPerCm[135];
    break;
    case 137:
    fuelRemainInTank = fuelQuantityPerCm[136];
    break;
    case 138:
    fuelRemainInTank = fuelQuantityPerCm[137];
    break;
    case 139:
    fuelRemainInTank = fuelQuantityPerCm[138];
    break;
    case 140:
    fuelRemainInTank = fuelQuantityPerCm[139];
    break;
    case 141:
    fuelRemainInTank = fuelQuantityPerCm[140];
    break;
    case 142:
    fuelRemainInTank = fuelQuantityPerCm[141];
    break;
    case 143:
    fuelRemainInTank = fuelQuantityPerCm[142];
    break;
    case 144:
    fuelRemainInTank = fuelQuantityPerCm[143];
    break;
    case 145:
    fuelRemainInTank = fuelQuantityPerCm[144];
    break;
    case 146:
    fuelRemainInTank = fuelQuantityPerCm[145];
    break;
    case 147:
    fuelRemainInTank = fuelQuantityPerCm[146];
    break;
    case 148:
    fuelRemainInTank = fuelQuantityPerCm[147];
    break;
    case 149:
    fuelRemainInTank = fuelQuantityPerCm[148];
    break;
    case 150:
    fuelRemainInTank = fuelQuantityPerCm[149];
    break;
    case 151:
    fuelRemainInTank = fuelQuantityPerCm[150];
    break;
    case 152:
    fuelRemainInTank = fuelQuantityPerCm[151];
    break;
    case 153:
    fuelRemainInTank = fuelQuantityPerCm[152];
    break;
    case 154:
    fuelRemainInTank = fuelQuantityPerCm[153];
    break;
    case 155:
    fuelRemainInTank = fuelQuantityPerCm[154];
    break;
    case 156:
    fuelRemainInTank = fuelQuantityPerCm[155];
    break;
    case 157:
    fuelRemainInTank = fuelQuantityPerCm[156];
    break;
    case 158:
    fuelRemainInTank = fuelQuantityPerCm[157];
    break;
    case 159:
    fuelRemainInTank = fuelQuantityPerCm[158];
    break;
    case 160:
    fuelRemainInTank = fuelQuantityPerCm[159];
    break;
    case 161:
    fuelRemainInTank = fuelQuantityPerCm[160];
    break;
    case 162:
    fuelRemainInTank = fuelQuantityPerCm[161];
    break;
    case 163:
    fuelRemainInTank = fuelQuantityPerCm[162];
    break;
    case 164:
    fuelRemainInTank = fuelQuantityPerCm[163];
    break;
    case 165:
    fuelRemainInTank = fuelQuantityPerCm[164];
    break;
    case 166:
    fuelRemainInTank = fuelQuantityPerCm[165];
    break;
    case 167:
    fuelRemainInTank = fuelQuantityPerCm[166];
    break;
    case 168:
    fuelRemainInTank = fuelQuantityPerCm[167];
    break;
    case 169:
    fuelRemainInTank = fuelQuantityPerCm[168];
    break;
    case 170:
    fuelRemainInTank = fuelQuantityPerCm[169];
    break;
    case 171:
    fuelRemainInTank = fuelQuantityPerCm[170];
    break;
    case 172:
    fuelRemainInTank = fuelQuantityPerCm[171];
    break;
    case 173:
    fuelRemainInTank = fuelQuantityPerCm[172];
    break;
    case 174:
    fuelRemainInTank = fuelQuantityPerCm[173];
    break;
    case 175:
    fuelRemainInTank = fuelQuantityPerCm[174];
    break;
    case 176:
    fuelRemainInTank = fuelQuantityPerCm[175];
    break;
    case 177:
    fuelRemainInTank = fuelQuantityPerCm[176];
    break;
    case 178:
    fuelRemainInTank = fuelQuantityPerCm[177];
    break;
    case 179:
    fuelRemainInTank = fuelQuantityPerCm[178];
    break;
    case 180:
    fuelRemainInTank = fuelQuantityPerCm[179];
    break;
    case 181:
    fuelRemainInTank = fuelQuantityPerCm[180];
    break;
    case 182:
    fuelRemainInTank = fuelQuantityPerCm[181];
    break;
    case 183:
    fuelRemainInTank = fuelQuantityPerCm[182];
    break;
    case 184:
    fuelRemainInTank = fuelQuantityPerCm[183];
    break;
    case 185:
    fuelRemainInTank = fuelQuantityPerCm[184];
    break;
    case 186:
    fuelRemainInTank = fuelQuantityPerCm[185];
    break;
    case 187:
    fuelRemainInTank = fuelQuantityPerCm[186];
    break;
    case 188:
    fuelRemainInTank = fuelQuantityPerCm[187];
    break;
    case 189:
    fuelRemainInTank = fuelQuantityPerCm[188];
    break;
    case 190:
    fuelRemainInTank = fuelQuantityPerCm[189];
    break;
    case 191:
    fuelRemainInTank = fuelQuantityPerCm[189];
    break;
    case 192:
    fuelRemainInTank = fuelQuantityPerCm[190];
    break;
    case 193:
    fuelRemainInTank = fuelQuantityPerCm[192];
    break;
    case 194:
    fuelRemainInTank = fuelQuantityPerCm[193];
    break;
    case 195:
    fuelRemainInTank = fuelQuantityPerCm[194];
    break;
    case 196:
    fuelRemainInTank = fuelQuantityPerCm[195];
    break;
    case 197:
    fuelRemainInTank = fuelQuantityPerCm[196];
    break;
    case 198:
    fuelRemainInTank = fuelQuantityPerCm[197];
    break;
    case 199:
    fuelRemainInTank = fuelQuantityPerCm[198];
    break;
    case 200:
    fuelRemainInTank = fuelQuantityPerCm[199];
    break; 
    case 201:
    fuelRemainInTank = fuelQuantityPerCm[200];
    break;
    case 200:
    fuelRemainInTank = fuelQuantityPerCm[199];
    break; 
    case 201:
    fuelRemainInTank = fuelQuantityPerCm[200];
    break;
    case 202:
    fuelRemainInTank = fuelQuantityPerCm[201];
    break; 
    case 203:
    fuelRemainInTank = fuelQuantityPerCm[202];
    break;
    case 204:
    fuelRemainInTank = fuelQuantityPerCm[203];
    break; 
    case 205:
    fuelRemainInTank = fuelQuantityPerCm[206];
    break;
    case 206:
    fuelRemainInTank = fuelQuantityPerCm[205];
    break; 
    case 207:
    fuelRemainInTank = fuelQuantityPerCm[206];
    break;
    case 208:
    fuelRemainInTank = fuelQuantityPerCm[207];
    break; 
    case 209:
    fuelRemainInTank = fuelQuantityPerCm[208];
    break;
    case 210:
    fuelRemainInTank = fuelQuantityPerCm[209];
    break; 
    case 211:
    fuelRemainInTank = fuelQuantityPerCm[209];
    break;
    case 212:
    fuelRemainInTank = fuelQuantityPerCm[211];
    break; 
    case 213:
    fuelRemainInTank = fuelQuantityPerCm[212];
    break;
    case 214:
    fuelRemainInTank = fuelQuantityPerCm[213];
    break; 
    case 215:
    fuelRemainInTank = fuelQuantityPerCm[214];
    break;
    case 216:
    fuelRemainInTank = fuelQuantityPerCm[215];
    break; 
    case 217:
    fuelRemainInTank = fuelQuantityPerCm[216];
    break;
    case 218:
    fuelRemainInTank = fuelQuantityPerCm[216];
    break; 
    case 219:
    fuelRemainInTank = fuelQuantityPerCm[218];
    break;
    case 220:
    fuelRemainInTank = fuelQuantityPerCm[219];
    break; 
    case 221:
    fuelRemainInTank = fuelQuantityPerCm[220];
    break;
    case 222:
    fuelRemainInTank = fuelQuantityPerCm[221];
    break; 
    case 223:
    fuelRemainInTank = fuelQuantityPerCm[222];
    break;
    case 224:
    fuelRemainInTank = fuelQuantityPerCm[223];
    break; 
    case 225:
    fuelRemainInTank = fuelQuantityPerCm[224];
    break;
    case 226:
    fuelRemainInTank = fuelQuantityPerCm[225];
    break; 
    case 227:
    fuelRemainInTank = fuelQuantityPerCm[226];
    break;
    case 228:
    fuelRemainInTank = fuelQuantityPerCm[227];
    break; 
    case 229:
    fuelRemainInTank = fuelQuantityPerCm[228];
    break;
    case 230:
    fuelRemainInTank = fuelQuantityPerCm[229];
    break; 
    case 231:
    fuelRemainInTank = fuelQuantityPerCm[230];
    break;
    case 232:
    fuelRemainInTank = fuelQuantityPerCm[231];
    break; 
    case 233:
    fuelRemainInTank = fuelQuantityPerCm[232];
    break;
    case 234:
    fuelRemainInTank = fuelQuantityPerCm[233];
    break; 
    case 235:
    fuelRemainInTank = fuelQuantityPerCm[234];
    break;
    case 236:
    fuelRemainInTank = fuelQuantityPerCm[235];
    break; 
    case 237:
    fuelRemainInTank = fuelQuantityPerCm[236];
    break;
    case 238:
    fuelRemainInTank = fuelQuantityPerCm[237];
    break; 
    case 239:
    fuelRemainInTank = fuelQuantityPerCm[238];
    break;
    case 240:
    fuelRemainInTank = fuelQuantityPerCm[239];
    break; 
    case 241:
    fuelRemainInTank = fuelQuantityPerCm[240];
    break;
    case 242:
    fuelRemainInTank = fuelQuantityPerCm[241];
    break; 
    case 243:
    fuelRemainInTank = fuelQuantityPerCm[242];
    break;
    case 244:
    fuelRemainInTank = fuelQuantityPerCm[243];
    break; 
    case 245:
    fuelRemainInTank = fuelQuantityPerCm[244];
    break;
    case 246:
    fuelRemainInTank = fuelQuantityPerCm[245];
    break; 
    case 247:
    fuelRemainInTank = fuelQuantityPerCm[246];
    break;
    case 248:
    fuelRemainInTank = fuelQuantityPerCm[247];
    break;
    case 249:
    fuelRemainInTank = fuelQuantityPerCm[248];
    break;
    case 250:
    fuelRemainInTank = fuelQuantityPerCm[249];
    break;
    case 251:
    fuelRemainInTank = fuelQuantityPerCm[250];
    break;
    default:
    fuelRemainInTank = "En attente de données";
    
    }

document.getElementById("outlec4").innerHTML = fuelRemainInTank;

}  

calculGo30k2();