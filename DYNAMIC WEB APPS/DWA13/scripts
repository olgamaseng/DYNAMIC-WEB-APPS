const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


//calling each name and province

names.forEach((names, i) => {
    console.log(`${names}`.concat(`(${provinces[i]})`))
    })
    
    //names
    names.forEach((names) => {
        console.log(names)
    })
    
    
    //filter
    
    const filterCapeProvinces = provinces.filter((cape)=> {
        return !cape.includes('Cape')
    })
    console.log(filterCapeProvinces)
    

//map of names to uppercase

const toUpperCase = provinces.map(upperCase => {return upperCase.toUpperCase()} )
console.log(toUpperCase)

//map of number of characters

const toNumbers = names.map( (numbers) =>{
    return numbers.length
    })
    
    console.log(toNumbers)
    
    //sort
     const sortNames = provinces.sort( (a,b)  => {
        if (a < b) {return -1;}
        if (b > a) {return 1;}
        return 0;
        
      } );
     console.log(sortNames)

 //map and some

 const toBoolean = names.map( (name) => name.split('')
      .some(char => char.toLowerCase() == 's'))

    console.log(toBoolean)

    const provinceObject = names.reduce((name, obj, index) => {
        obj[name] = provinces[index];
        return obj;
      }, {});
      console.log(provinceObject); 

      const products = [
        { product: 'banana', price: "2" },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: "8" },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
      ];
      
      // Exercise 1
      products.forEach(product => {
        console.log(product.product);
      });
      
      // Exercise 2
      const filteredProducts = products.filter(product => product.product.length > 5);
      console.log(filteredProducts);
      
      // Exercise 3
      const totalPrice = products
        .filter(product => typeof product.price === 'number' && product.price !== '')
        .map(product => Number(product.price))
        .reduce((total, price) => total + price, 0);
      console.log(totalPrice);
      
      // Exercise 4
      const productNames = products.reduce((str, product) => {
        if (str === '') {
          return product.product;
        } else {
          return `${str}, ${product.product}`;
        }
      }, '');
      console.log(productNames);
      
      // Exercise 5
      const highestLowestPrices = products.reduce((result, product) => {
        if (result.highest === null || product.price > result.highest.price) {
          result.highest = product;
        }
        if (result.lowest === null || product.price < result.lowest.price) {
          result.lowest = product;
        }
        return result;
      }, { highest: null, lowest: null });
      console.log(`Highest: ${highestLowestPrices.highest.product}. Lowest: ${highestLowestPrices.lowest.product}`);
      
      // Exercise 6
      const recreatedObject = Object.entries(products).reduce((obj, [key, value]) => {
        const { product, price } = value;
        obj[key] = { name: product, cost: price };
        return obj;
      }, {});
      console.log(recreatedObject);
      
