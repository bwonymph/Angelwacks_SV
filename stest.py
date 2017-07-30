#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function

import time

from satori.rtm.client import make_client

endpoint = "wss://h0j3zwoo.api.satori.com"
appkey = "d3fE5A8bc1D9C2e8761DfCf7d6cab13a"


def main():
    with make_client(endpoint=endpoint, appkey=appkey) as client:
        print('Connected to Satori RTM!')

        while True:

            def on_publish_ack(pdu):
                if pdu['action'] == 'rtm/publish/ok':
                    print('Publish confirmed')
                else:
                    print(
                        'Failed to publish. '
                        'RTM replied with the error {0}: {1}'.format(
                            pdu['body']['error'], pdu['body']['reason']))

            message = {"who": "zebra", "where": [34.134358, -118.321506]}
            client.publish("animals", message, callback=on_publish_ack)

            time.sleep(1)


if __name__ == '__main__':
    main()