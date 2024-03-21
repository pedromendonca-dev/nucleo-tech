import React, { useEffect, useRef, useState } from "react";

import "./style.scss";

import Layout from "../../layout";

import { Input } from "../../components";

import Search from "../../assets/icons/Search.svg";
import { FaqMessages } from "../../constants/faq";

const Faq = () => {
  const searchInputRef = useRef(null);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    searchInputRef?.current?.focus();
  }, [searchInputRef]);

  const handleItemClick = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <Layout>
      <div className="faq-container">
        <label>Olá, como podemos te ajudar?</label>
        <Input
          placeholder="Digite o tema de pesquisa aqui..."
          icon={Search}
          ref={searchInputRef}
        />

        <div className="faq-question-container">
          {FaqMessages?.map((item, index) => (
            <div key={index} onClick={() => handleItemClick(index)}>
              <div className="card">{item?.question}</div>
              {expandedItem === index && (
                <div className="card-response">{item.response}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
