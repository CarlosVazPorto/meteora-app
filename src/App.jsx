import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              carrinho={carrinho}
              adicionarProduto={adicionarProduto}
              removerProduto={removerProduto}
              removerProdutoCarrinho={removerProdutoCarrinho}
              valorTotalCarrinho={valorTotalCarrinho}
              quantidadeProdutos={quantidadeProdutos}
            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              adicionarProduto={adicionarProduto}
              removerProduto={removerProduto}
              removerProdutoCarrinho={removerProdutoCarrinho}
              valorTotalCarrinho={valorTotalCarrinho}
              quantidadeProdutos={quantidadeProdutos}
            />
          }
        />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
