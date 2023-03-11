import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as searchServices from '~/services/searchService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.search('huy');
            setDataUser(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {dataUser.map((item, index) => (
                <AccountItem key={index} data={item} />
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
