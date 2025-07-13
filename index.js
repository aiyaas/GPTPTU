/**
 * Copyright (c) 2025 Darmawan (Aiyaas). All Rights Reserved.
 * (GPTPTU) Global processing text from the prompt on the user.
 *
 * @global
 */
"use strict";

// @def
function g_from(prompt) {
  // Ubah prompt yang masuk menjadi array [] atau suku-kata
  const ft_list = prompt
    .toLowerCase()
    .split(" ")
    .filter((item) => item.length > 0);

  let _set = new Set(); // Object set

  ft_list.forEach((array) => {
    return array
      .split(/\s+/) 
      .forEach((e) => _set.add(e))
  });
  
  let lowCase = prompt.toLowerCase().split(/\s+/);
  let filter = lowCase.filter((w) => _set.has(w));

  if (filter.length > 10) {
    // Untuk menggabungkan kata-kata yang relevan (dapat ditingkatkan secara signifikan)
    const shuffel = [...filter, "_"]
      .sort(() => 0.5 - Math.random())
      .slice(0, prompt.length) // Ambil jumlah prompt yang masuk ubah ke (length) untuk jumlah response dari model nya
      .join(" ");

    console.table(filter)

    return shuffel;
  } else {
    // Alternative ketika prompt yang dimasukan user terlalu pendek
    const suggestion = Array.from(_set)
      .sort(() => 0.5 - Math.random())
      .slice(0, 20)
      .join(" ");

    return `I may not understand, maybe you mean (${suggestion})?`;
  }
}
 
/**
 * @exports
 */
exports.g_from = g_from;

