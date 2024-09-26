const savedSuppliesPrice = JSON.parse(localStorage.getItem('suppliesPrice'));
const savedSuppliesActive = JSON.parse(localStorage.getItem('suppliesActive'));

let Supplies = {
    name: {
        mp: "Mana Potion",
        smp: "Strong Mana Potion",
        gmp: "Great Mana Potion",
        ump: "Ultimate Mana Potion",
        hp: "Health Potion",
        shp: "Strong Health Potion",
        gsp: "Great Spirit Potion",
        uh: "Ultimate Health Rune",
        sd: "Sudden Death Rune",
        csd: "Creeping Death Rune",
        ava: "Avalanche Rune",
        icicle: "Icicle Rune",
        gfb: "Great Fireball Rune",
    },
    price: {
        mp: savedSuppliesPrice?.mp ?? 100,
        smp: savedSuppliesPrice?.smp ?? 150,
        gmp: savedSuppliesPrice?.gmp ?? 225,
        ump: savedSuppliesPrice?.ump ?? 450,
        hp: savedSuppliesPrice?.hp ?? 45,
        shp: savedSuppliesPrice?.shp ?? 150,
        gsp: savedSuppliesPrice?.gsp ?? 360,
        uh: savedSuppliesPrice?.uh ?? 100,
        sd: savedSuppliesPrice?.sd ?? 250,
        csd: savedSuppliesPrice?.csd ?? 500,
        ava: savedSuppliesPrice?.ava ?? 250,
        icicle: savedSuppliesPrice?.icicle ?? 100,
        gfb: savedSuppliesPrice?.gfb ?? 150,
    },
    active: {
        mp: savedSuppliesActive?.mp ?? false,
        smp: savedSuppliesActive?.smp ?? false,
        gmp: savedSuppliesActive?.gmp ?? false,
        ump: savedSuppliesActive?.ump ?? false,
        hp: savedSuppliesActive?.hp ?? false,
        shp: savedSuppliesActive?.shp ?? false,
        gsp: savedSuppliesActive?.gsp ?? false,
        uh: savedSuppliesActive?.uh ?? false,
        sd: savedSuppliesActive?.sd ?? false,
        csd: savedSuppliesActive?.csd ?? false,
        ava: savedSuppliesActive?.ava ?? false,
        icicle: savedSuppliesActive?.icicle ?? false,
        gfb: savedSuppliesActive?.gfb ?? false,
    },
    save: function () {
        localStorage.setItem("suppliesActive", JSON.stringify(this.active));
        localStorage.setItem("suppliesPrice", JSON.stringify(this.price));
    }
};

export default Supplies;