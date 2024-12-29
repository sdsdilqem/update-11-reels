import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function useProductDetails() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleOrderClick = () => {
    setIsOrderOpen(true);
  };

  const handleCommentsClick = () => {
    setIsCommentsOpen(true);
  };

  const handlePromoteClick = () => {
    navigate(`/product/${id}/promote`);
  };

  const handleCloseSheets = () => {
    setIsContactOpen(false);
    setIsOrderOpen(false);
    setIsCommentsOpen(false);
  };

  return {
    isContactOpen,
    isOrderOpen,
    isCommentsOpen,
    handleContactClick,
    handleOrderClick,
    handleCommentsClick,
    handlePromoteClick,
    handleCloseSheets
  };
}