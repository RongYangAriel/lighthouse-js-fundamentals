const calculateRectangleArea = (length, width) =>{
  return length > 0 && width > 0 ? length * width : undefined;
}
const calculateTriangleArea = (base, height) => {
  return base > 0 && height > 0 ? base * height / 2 : undefined;
}
const calculateCircleArea = (radius) =>{
  return radius > 0 ? Math.PI * radius * radius : undefined;
}