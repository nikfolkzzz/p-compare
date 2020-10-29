
export default function elemIndexArrReturner( elemQuan){

    // Правый промежуточный массив
    const rightTempArr = [];
    
    for (let i = 1; i < elemQuan - 1; i++) {
      rightTempArr.push(i);
    }
    
    rightTempArr.reverse();
    rightTempArr.unshift(0);
    // console.log("правый промежуточный", rightTempArr);
    
    // массив с количеством элементов  в каждом этапе
    
    const stepQuanArr = Array.from({ length: elemQuan - 1 }, (v, k) => k + 1);
    stepQuanArr.reverse();
    // console.log("количество сравнений в этапе", stepQuanArr);
    
    let stepArr = [];
    // eslint-disable-next-line no-unused-vars
    stepQuanArr.forEach((item) => {
      stepArr = [...stepArr, Array.from({ length: item }, (v, k) => k)];
    });
    // eslint-disable-next-line no-unused-vars
    stepArr = stepArr.map((item, index) => item.map((item) => (item = index)));
    stepArr = stepArr
      .map((item) => item.map((item, index) => (index !== 0 ? (item = 0) : item)))
      .flat();
    // console.log("массив этапов", stepArr);
    //  вспомогательная функция  сформировать этой функцией массив того что справа
    let a = 1;
    const calcRightEl = (step) => {
      a = a - rightTempArr[step];
      return a;
    };
    // массив чисел отнимающихся в правом элементе
    let righTermArr = [];
    for (let item of stepArr) {
      righTermArr.push(calcRightEl(item));
    }
    // console.log("правые слагаемые", righTermArr);
    
    // LEFT ELEMENTS
    const combQuant = (elemQuan * (elemQuan - 1)) / 2;
    let combQuantArr = Array.from({ length: combQuant }, (v, k) => k);
    
    let leftTempArr = [];
    stepQuanArr.forEach((item) => {
      leftTempArr = [...leftTempArr, Array.from({ length: item }, (v, k) => k)];
    });
    // eslint-disable-next-line no-unused-vars
    leftTempArr = leftTempArr
    // eslint-disable-next-line no-unused-vars
      .map((item, index) => item.map((item) => (item = index)))
      .flat();
    // eslint-disable-next-line no-unused-vars
    leftTempArr = leftTempArr.map((item) => item * -1);
    // console.log("промежуточный слева", leftTempArr);
    
    // console.log("combination quan arr", combQuantArr);
    
    let leftTermArr = [];
    
    leftTermArr = combQuantArr.map((item, index) => item + leftTempArr[index]);
    
    // console.log("слагаемые слева", leftTermArr);
    
    // Индексы слева
    
    let leftIndexArr = combQuantArr.map((item, index) => {
      return (item = item - leftTermArr[index]);
    });
    
    // console.log("левые Индексы", leftIndexArr);
    
    // Индексы справа
    
    let righIndexArr = combQuantArr.map((item, index) => {
      return (item = item + righTermArr[index]);
    });
    
    // console.log("правые Индексы", righIndexArr);
    
    let compareArr = [];
    
    for (let [index, item] of leftIndexArr.entries()) {
      compareArr = [...compareArr, [item, righIndexArr[index]]];
    }
    // compareArr.sort(()=>0.5 - Math.random()
    // console.log("финальный массив:", compareArr);
    
    return compareArr
    
    }
    
    
    
    