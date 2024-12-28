function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // Potential error: x might not have a length property
}