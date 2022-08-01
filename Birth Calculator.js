

    function age(birthDate,otherDate){
        


    
    let inputdate = new Date(birthdate) ;
    let otherDate = new Date(otherDate);
    let birthDate = document.getElementById('inputdate').inputdate


    let otherYear = otherDate.getfullyear();
    let birthYear = birthDate.getfullyear();
    let otherMonth = otherDate.getMonth();
    let birthMonth = birthDate.getMonth();
    let otherDay = otherDate.getDate();
    let bornDay = birthDate.getDate();


    let years = (otherYear - birthYear)
    if (otherMonth < birthMonth || otherMonth == birthMonth && otherDay < bornDay){
        return years--;
    }

    let months = (otherMonth - birthMonth)
    if (otherMonth <= birthMonth) {
        return months+12 } ;
    if (otherDay < bornDay) {
        return months-- } ;


    let days = (otherDay - bornDay)   
    if  (otherDay <= bornDay) {
         return days = 31 + otherDay - bornDay } ;




     let yearstring = "" ;
     let monthsstring = "" ;
     let daysstring = "" ;
     let agestring = "" ;
     let age = "" ;
   
         age = { years , months , days } ;

         if (age.years > 1) yearstring = " years " ;
         else  yearstring = " year " ;

         if (age.months > 1) monthstring = " months " ;
          else yearstring = " month " ;

         if (age.days > 1) yearstring = " days " ;
          else yearstring = " day " ;


         if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
           agestring = age.years + yearstring + "," + age.months + monthsstring + ", and" + age.days + daysstring + " old " ;

         else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
            agestring = " only " + age.days + daysstring + " old " ;

         else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
            agestring = age.years + yearstring + " old. Happy Birthday!" ; 

         else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
           agestring = age.years + yearstring + "," + age.months + monthsstring + " old " ;

         else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
           agestring = age.months + monthsstring + ", and" + age.days + daysstring + " old " ;

         else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
           agestring = age.years + yearstring + ", and" + age.days + daysstring + " old " ;

         else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
           agestring = age.months + monthsstring + " old " ;

           return agestring ;



           document.getElementById("result").innerHTML = agestring ;

           
           

}










    
    
    
    





    
    
    
    


   