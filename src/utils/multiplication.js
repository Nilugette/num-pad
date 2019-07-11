const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export default (min, max) => ({
    left: randomInteger(min, max),
    right: randomInteger(min, max)
  });
  