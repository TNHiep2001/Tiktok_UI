import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShareNodes,
    faVolumeLow,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';
import AccountPreview from '../AccountPreview';
import styles from './HomeItems.module.scss';

const cx = classNames.bind(styles);

function HomeItems({ srcImg, srcVideo, following }) {
    const [colorHeart, setColorHeart] = useState(true);
    const [eventVideo, setEventVideo] = useState(true);
    const [valueVolume, setValueVolume] = useState(0);
    const [actionVolume, setActionVolume] = useState(true);

    const vidRef = useRef();
    const volumeRef = useRef();

    useEffect(() => {
        if (eventVideo) {
            vidRef.current.play();
        } else {
            vidRef.current.pause();
        }
    }, [eventVideo]);

    useEffect(() => {
        // Xác định khi người dùng cuộn trang
        function handleScroll() {
            const videoBottom = vidRef.current.getBoundingClientRect().bottom;

            // Kiểm tra xem video có đang phát không
            if (videoBottom < 310 || videoBottom > window.innerHeight + 250) {
                // Video đang phát, dừng nó
                vidRef.current.pause();
                setEventVideo(false);
            } else {
                vidRef.current.play();
                setEventVideo(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        vidRef.current.volume = valueVolume / 100;
    }, [valueVolume]);

    const handleChangeColor = () => {
        setColorHeart(!colorHeart);
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                        <div className={cx('title-preview')}>
                            <p className={cx('value-preview')}>
                                Spreading good vibes, love and happiness since 1998 ✨💝 📧younes@totallymgmt.com
                            </p>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    const handleOnOffVideo = () => {
        setEventVideo(!eventVideo);
    };

    const handleChangeVolume = (e) => {
        setValueVolume(e.target.value);
        vidRef.current.muted = false;
        setActionVolume(false);
        if (e.target.value <= 0) {
            setActionVolume(true);
        }
    };

    const handleVolume = () => {
        if (actionVolume) {
            setActionVolume(!actionVolume);
            setValueVolume(50);
            vidRef.current.muted = false;
        } else {
            setActionVolume(!actionVolume);
            setValueVolume(0);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom-start"
                offset={[-10, 6]}
                delay={[800, 0]}
                zIndex={10}
                render={renderPreview}
            >
                <Link to="/@user" className={cx('wrapper-avatar')}>
                    <img className={cx('avatar')} src={srcImg} alt="avt" />
                </Link>
            </Tippy>

            <div className={cx('container')}>
                <div className={cx('info-container')}>
                    <div className={cx('info-account')}>
                        <Link to="/@user">
                            <strong className={cx('nickname')}>tnhiep_</strong>
                        </Link>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        <Link to="/@user">
                            <p className={cx('name')}>Tran Ngoc Hiep</p>
                        </Link>
                    </div>

                    {!following && (
                        <Button outline small className={cx('follow-btn')}>
                            Follow
                        </Button>
                    )}

                    <div className={cx('content')}>
                        <p className={cx('title')}>She always shares positive things</p>
                        <strong className={cx('hastag')}>
                            #nguyenphuonghang #hyungung #fannguyenphuonghang#xh#fyp
                        </strong>
                    </div>

                    <div className={cx('video-music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                        <div className="title-music">background music - Nguyen Phuong Hang fc♥️♥️</div>
                    </div>
                </div>
                <div className={cx('wrapper-video')}>
                    <div>
                        <video autoPlay volume={0.6} loop muted className={cx('video')} ref={vidRef}>
                            <source src={srcVideo} type="video/mp4" />
                        </video>
                        {eventVideo ? (
                            <FontAwesomeIcon icon={faPause} className={cx('pause-btn')} onClick={handleOnOffVideo} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} className={cx('play-btn')} onClick={handleOnOffVideo} />
                        )}

                        {actionVolume ? (
                            <FontAwesomeIcon icon={faVolumeXmark} className={cx('mute-btn')} onClick={handleVolume} />
                        ) : (
                            <FontAwesomeIcon icon={faVolumeLow} className={cx('unmute-btn')} onClick={handleVolume} />
                        )}

                        <input
                            ref={volumeRef}
                            type="range"
                            min="0"
                            max="100"
                            value={valueVolume}
                            className={cx('volume')}
                            onChange={handleChangeVolume}
                        />
                    </div>
                    <div className={cx('action')}>
                        <button className={cx('action-item')} onClick={handleChangeColor}>
                            <span className={cx('wrapper-icon')}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className={colorHeart ? cx('icon-action') : cx('icon-heart-active')}
                                />
                            </span>
                            <p className={cx('value')}>123.9K</p>
                        </button>
                        <button className={cx('action-item')}>
                            <span className={cx('wrapper-icon')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon-action')} />
                            </span>
                            <p className={cx('value')}>1299</p>
                        </button>
                        <button className={cx('action-item')}>
                            <span className={cx('wrapper-icon')}>
                                <FontAwesomeIcon icon={faShareNodes} className={cx('icon-action')} />
                            </span>
                            <p className={cx('value')}>225</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeItems;
