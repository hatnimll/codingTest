function solution(ineq, eq, n, m) {
    if(ineq==="<"){
       if(eq === "="){
        return n <= m ? 1 : 0
        }        
        return n >= m ? 0 : 1 
       }
       if(eq === "="){
           return n >= m ? 1 : 0
       }
        return n <= m ?  0 : 1
}