export const capitalize = (str) => {
    return str.toUpperCase()
}

export const getLeastProductRate = (hits) => {
    const lowestRate = {} //company => {}
    hits.forEach(i => {
      if(i.companyName in lowestRate){
        if(i.advertisedRate < lowestRate[i.companyName].advertisedRate){
          lowestRate[i.companyName] = i
        }
      }else{
        lowestRate[i.companyName] = i
      }
    })
    return Object.values(lowestRate)
  }
  
export const getSecondLeastadvertisedRate = (hits) => {
    const least1 = {} //company => {}
    const least2 = {} //company => {}
  
    const classifyadvertisedRate = (i) => {
      if(!(i.companyName in least1)){
          least1[i.companyName] = i
          return;
      }
      if((least1[i.companyName].advertisedRate > i.advertisedRate)){
          least2[i.companyName] = least1[i.companyName]
          least1[i.companyName] = i
      }
      if(!(i.companyName in least2) || (least1[i.companyName].advertisedRate < i.advertisedRate && least2[i.companyName].advertisedRate > i.advertisedRate) ) {
          least2[i.companyName] = i
          return;
      }
  
      if(least1[i.companyName].advertisedRate > i.advertisedRate && least2[i.companyName].advertisedRate > i.advertisedRate ){
          least2[i.companyName] = least1[i.companyName]
          least1[i.companyName] = i
      }
    }
    hits.forEach(i => classifyadvertisedRate(i))
    return Object.values(least2)
  }