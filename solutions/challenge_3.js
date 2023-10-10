function netsalary (){
    //this entire function is the final caluations needed to get the net salary
    const netsalary = grossSalary - payee - NHIF - NSSF
    const grossSalary = basicsalary + benefits;
    const payee = PayeeTAX (grossSalary)
    const NHIF = NHIFdeductions (grossSalary)
    const NSSF = NSSFdeductions (grossSalary)
    return netsalary

}
function PayeeTAX (grossSalary){
    //10% of tax is normally deducted and its a fixed rate so any amount imputed 10% is deducted
    return grossSalary*0.1
}

function NHIFdeductions (grossSalary){
    return grossSalary - 750
}

function NSSFdeductions (grossSalary){
    //6% of NSSF is normally deducted and its a fixed rate so any amount imputed 6% is deducted
    return grossSalary*0.06
}

