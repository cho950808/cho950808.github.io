import Image from 'next/image'
import { useEffect, useCallback, useState } from 'react'
import { useModal } from '../../hooks/useModal'

export default function CareerDetailModal() {
  const { isOpen, modalContent, closeModal } = useModal()
  const [selectedImage, setSelectedImage] = useState(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleEscape = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal]
  )


  useEffect(() => {
    if (isOpen) {
      setSelectedImage(null)
      setScrollIndex(0)
      document.body.style.overflow = 'hidden'
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
      setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 500)
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleEscape])

  if (!isOpen || !modalContent) return null

  const handleScrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  const handleScrollRight = () => {
    const maxScrollIndex = Math.max(modalContent.images.length - 3, 0)
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxScrollIndex))
  }

  

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-500 z-[101] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeModal}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 overflow-y-auto z-[102] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`fixed inset-0 overflow-y-auto z-[102] flex items-center justify-center transition-all duration-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-500 w-full max-w-[90vw] max-h-[90vh] mx-auto">
            <header>
              <button
                type="button"
                className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 shadow-md transition-all"
                onClick={closeModal}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white px-8 pt-6 pb-4 border-b border-gray-200 flex-shrink-0">
                {modalContent.title && (
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-2 bg-blue-500 rounded mr-3" />
                    <h3 className="text-1xl lg:text-3xl font-semibold leading-8 text-gray-900">{modalContent.title}</h3>
                  </div>
                )}
                {modalContent.description && (
                  <p className="text-rose-600 text-base lg:text-lg leading-relaxed">{modalContent.description}</p>
                )}
              </div>
            </header>

            <section
              className="bg-white py-3 lg:py-3 pl-8 pr-8 overflow-y-auto h-full"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
            >
              {modalContent.images && modalContent.images.length > 0 && (
                <div className="relative mb-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">● 프로젝트 작업 이미지</h3>
                  {modalContent.images.length > 3 && (
                    <>
                      {scrollIndex > 0 && (
                        <button
                          onClick={handleScrollLeft}
                          className="absolute top-1/2 left-[-18px] z-10 p-3 transform -translate-y-1/2 bg-gradient-to-r backdrop-blur-md rounded-full shadow-lg hover:scale-105 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      )}
                      {scrollIndex < modalContent.images.length - 3 && (
                        <button
                          onClick={handleScrollRight}
                          className="absolute top-1/2 right-[-18px] z-10 p-3 transform -translate-y-1/2 bg-gradient-to-l from-white/60 to-gray-100/60 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
                  <div className="overflow-hidden px-4 py-4">
                    <div
                      className="flex gap-6 transition-transform duration-500"
                      style={{
                        transform: `translateX(-${scrollIndex * 33.33}%)`,
                      }}
                    >
                      {modalContent.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer flex-shrink-0 overflow-hidden rounded-xl shadow-md bg-white"
                          style={{ width: 'calc((100% / 3) - 20px)' }}
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt || `Image ${index + 1}`}
                              fill
                              className="object-contain transition-transform duration-300 transform group-hover:scale-105"
                              quality={80}
                              priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="white"
                                className="w-10 h-10"
                              >
                                <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
                                <line
                                  x1="11"
                                  y1="8"
                                  x2="11"
                                  y2="14"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                                <line
                                  x1="8"
                                  y1="11"
                                  x2="14"
                                  y2="11"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {modalContent.roles && (
                  <div className="my-8 flex items-start">
                    <div className="w-1 h-full bg-gradient-to-b from-gray-500 to-gray-800 rounded mr-4" />
                    <div>
                      <h3 className="relative inline-block text-xl lg:text-2xl font-semibold text-gray-800 mb-4 pb-1">
                        <span className="text-lg lg:text-xl mr-2 text-gray-800">●</span> 업무 및 역할
                      </h3>
                      <p className="py-5 text-gray-600 text-base lg:text-lg leading-relaxed whitespace-pre-line bg-gradient-to-r from-gray-50 via-gray-25 to-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                        {modalContent.roles}
                      </p>
                    </div>
                  </div>
                )}
                {modalContent.achievements && (
                  <div className="my-8 flex items-start">
                    <div className="w-1 h-full bg-gradient-to-b from-gray-500 to-gray-800 rounded mr-4" />
                    <div>
                      <h3 className="flex items-center text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                        <span className="text-lg lg:text-xl mr-2 text-gray-800">●</span> 업무 성과
                      </h3>
                      <p className="py-5 text-gray-600 text-base lg:text-lg leading-relaxed whitespace-pre-line bg-gradient-to-r from-gray-50 via-gray-25 to-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                        {modalContent.achievements}
                      </p>
                    </div>
                  </div>
                )}
                {modalContent.technologies && (
                  <div className="my-8 flex items-start">
                    <div className="w-1 h-full bg-gradient-to-b from-gray-600 to-gray-900 rounded mr-4" />
                    <div className="w-full">
                      <h3 className="flex items-center text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                        <span className="mr-2 text-gray-700">🔧</span> Technologies
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {modalContent.technologies.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm transition-transform transform"
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-gray-800">{item.tech}</h4>
                              {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <footer>
              <div className="bg-gray-100 px-8 py-4 flex justify-end border-t border-gray-200 flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-[103] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          aria-hidden="true"
        >
          <div className="relative w-[70vw] h-[70vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain rounded-lg shadow-lg"
              priority
              sizes="80vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
