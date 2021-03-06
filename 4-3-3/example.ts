class Creature {
  breath() {}
}

class Animal extends Creature {
  shakeTail() {}
}

class Human extends Creature {
  greet() {}
}

function action(creature: Animal | Human | Creature) {
  const c0 = creature;
  c0.breath();
  if (creature instanceof Animal) {
    const c1 = creature;
    return c1.shakeTail();
  }

  const c2 = creature;
  if (creature instanceof Human) {
    const c3 = creature;
    return c3.greet();
  }

  const c4 = creature;
  return c4.breath();
}
