#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import print_function

import time

from satori.rtm.client import make_client

endpoint = "########"
appkey = "#######"


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

            message = {"time": "10", "patients": "12"}
            client.publish("hospital1", message, callback=on_publish_ack)

            time.sleep(1)


if __name__ == '__main__':
    main()
