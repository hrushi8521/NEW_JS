function getStudentInfo<T>(data: T): T{
    return data;
}

console.log(getStudentInfo<string>("Tom"));
console.log(getStudentInfo<number>(110));


