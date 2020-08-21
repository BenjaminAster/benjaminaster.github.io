class Levels {
	constructor() {
		this.levels = [ // x, y, length, horizontal?, is red block?
			[ // level 0
				{
					x: 0,
					y: 2,
					l: 2,
					h: true,
				},
				{
					x: 0,
					y: 0,
					l: 3,
					h: true,
				},
				{
					x: 2,
					y: 1,
					l: 3,
					h: false,
				},
				{
					x: 5,
					y: 0,
					l: 3,
					h: false,
				},
				{
					x: 0,
					y: 3,
					l: 2,
					h: false,
				},
				{
					x: 0,
					y: 5,
					l: 3,
					h: true,
				},
				{
					x: 4,
					y: 3,
					l: 2,
					h: true,
				},
				{
					x: 4,
					y: 4,
					l: 2,
					h: false,
				},
			],
			[  // level 1
				{
					x: 0,
					y: 2,
					l: 2,
					h: true,
				},
				{
					x: 2,
					y: 1,
					l: 2,
					h: false,
				},
				{
					x: 3,
					y: 1,
					l: 3,
					h: false,
				},
				{
					x: 4,
					y: 1,
					l: 3,
					h: false,
				},
				{
					x: 0,
					y: 3,
					l: 2,
					h: true,
				},
				{
					x: 2,
					y: 3,
					l: 2,
					h: false,
				},
				{
					x: 1,
					y: 4,
					l: 2,
					h: false,
				},
				{
					x: 2,
					y: 5,
					l: 2,
					h: true,
				},
			],
			[
			]
		]
	}

	getLevel(levelNum) {
		console.log(this.levels[levelNum]);
		return this.levels[levelNum];
	}
}

/*
				{
					x: 0,
					y: 0,
					l: 2,
					h: false,
				},
*/







/*
300400400500200100020300
000000002440501200200001
21100240054000003
000400000425010000210001
0041000004500023012
0044100205002002001
20020400050203000210001
00000003025240001302
340041150402100023
2300340045001000213
0002002004250110022301
20120325040102202003
0124001004500104020011
120022015222101002011
11220024522300001
002240002522100221
21100120542022112011
000002140000521202110001
01210000205021120021003
1014211425220021003
4114002052120000210001
020002035224200201011
0101204305210222123
1124035020000120021001
0400400002050021200203
2110003052043211
2241010522021400023
11242352022010300001
2110012252011032
0121000400050110002200001
4023020050411011
000400002152210023223
*/