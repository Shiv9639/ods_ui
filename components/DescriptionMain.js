import React from "react";
import "../assets/css/search.css";
import SidebarMain from "./SidebarMain";

const DescriptionMain = () => {

  return (
    <div className="main-container">
      <div className="flex-item-1">
        <SidebarMain />
      </div>

      <div className="flex-item-22">
        <div className="description-container">
          <div className="desc-box">
            <h2 className="header-description">OD Monitoring</h2>
             <article className="article-description">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptas laborum aliquid, aspernatur odit ipsa nulla laudantium maxime non consectetur ab at nostrum distinctio modi ipsum illum quis provident voluptatibus!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus error sint. Vitae earum quod est mollitia eaque qui similique tenetur at quas quae alias explicabo, aliquid architecto recusandae beatae?
              </article>
          </div>

          <div className="desc-box">
            <h2 className="header-description">Data Extract</h2>
             <article className="article-description">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptas laborum aliquid, aspernatur odit ipsa nulla laudantium maxime non consectetur ab at nostrum distinctio modi ipsum illum quis provident voluptatibus!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus error sint. Vitae earum quod est mollitia eaque qui similique tenetur at quas quae alias explicabo, aliquid architecto recusandae beatae?
              </article>
           </div>

           <div className="desc-box">
            <h2 className="header-description">MMS Dashboard</h2>
             <article className="article-description">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptas laborum aliquid, aspernatur odit ipsa nulla laudantium maxime non consectetur ab at nostrum distinctio modi ipsum illum quis provident voluptatibus!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus error sint. Vitae earum quod est mollitia eaque qui similique tenetur at quas quae alias explicabo, aliquid architecto recusandae beatae?
              </article>
           </div>

           <div className="desc-box">
            <h2 className="header-description">Data Search</h2>
             <article className="article-description">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptas laborum aliquid, aspernatur odit ipsa nulla laudantium maxime non consectetur ab at nostrum distinctio modi ipsum illum quis provident voluptatibus!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus error sint. Vitae earum quod est mollitia eaque qui similique tenetur at quas quae alias explicabo, aliquid architecto recusandae beatae?
              </article>
           </div>

        </div>
      </div>
      <div className="flex-item-3"></div>
    </div>
  );
};

export default DescriptionMain;
