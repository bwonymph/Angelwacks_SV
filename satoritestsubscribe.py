
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function

import sys
import time

from satori.rtm.client import make_client, SubscriptionMode

endpoint = "wss://h0j3zwoo.api.satori.com"
appkey = "d3fE5A8bc1D9C2e8761DfCf7d6cab13a"


def main():

    class SubscriptionObserver(object):
        def on_enter_subscribed(self):
            print('Subscribed to: output')

        def on_subscription_data(self, pdu):
            for hospital1 in pdu['messages']:
                print('Got placeid {0}'.format(hospital1['place_id']))
                # print('Got time {0}: {1}'.format(hospital1['time'], hospital1))

        def on_enter_failed(self, reason):
            print('Subscription failed:', reason, file=sys.stderr)

    with make_client(endpoint=endpoint, appkey=appkey) as client:
        print('Connected to Satori RTM!')

        observer = SubscriptionObserver()
        client.subscribe('output', SubscriptionMode.SIMPLE, observer)

        print('Press CTRL-C to exit', file=sys.stderr)
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()