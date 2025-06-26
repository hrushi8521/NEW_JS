function getStudentInfo<P>(data: P): P {
  return data;
}

console.log(getStudentInfo<string>("tom"));
console.log(getStudentInfo<number>(10));
